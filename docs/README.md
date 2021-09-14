# 数据库的连接

## 基本连接

在`java.sql` 这个库中定义了各种数据库相关的**接口,** 具体的实现则需要在各大数据库的官网下载. 由于这里我们使用的是MySQL数据库, 所以我们要借助于导入MySQL的JAR包驱动来连接数据库.

> 不同IDE如何导入JAR包需自行百度



在MySQL中的JAR包中有实现了`Driver` 接口的类, 我们要先创建一个具体的对象: 

```java
// 由于重名问题, 所以我们这里必须带上包名
// 多态: 用接口变量指向接口的实现类
Driver driver = new com.mysql.cj.jdbc.Driver();
```

紧接着, 我们要开始连接数据库:

```java
Connection conn = driver.connect(url, info);
```

通过API, 我们可以看到, `connect` 函数需要两个参数, 第一个url是数据库的地址, 第二个参数则携带了一些信息(至少要提供用户名和密码), 我们需要提前准备好这些:

```java
// 准备配置信息
String url = "jdbc:mysql://localhost:3306/test";
Properties info = new Properties();
info.setProperty("user", "root");
info.setProperty("password", "xxx");

// 传入参数
Connection conn = driver.connect(url, info);
```

> **URL的格式:**
> URL由几部分组成:
> `协议名称` ://`地址` :`端口号` /`数据库名称` 
> 可以对应于上例子中的各部分
> 不同数据库的协议名称可以自行百度

如果你的用户名和密码没有错误, 这里就可以打印出`conn` 对象了:

```java
System.out.println(conn);
```

数据库也是一种资源, 所以记得在使用完成后关闭该连接:

```java
conn.close();
```

```java
// 源代码: 连接数据库(1)
public void Connection1() throws SQLException {
    Driver driver = new com.mysql.cj.jdbc.Driver();
    String url = "jdbc:mysql://localhost:3306/test";
    Properties info = new Properties();
    info.setProperty("user", "root");
    info.setProperty("password", "xxx");

    Connection conn = driver.connect(url, info);

    System.out.println(conn);
    conn.close();
}
```

## 改进

### 改进一

上述源代码有不好的地方: 我们把驱动中的包直接暴露在了我们的源代码中:

```java
Driver driver = new com.mysql.cj.jdbc.Driver();
```

这不是一种好的编程习惯**(为什么不是?)**

我们可以用Java的反射机制创建类, 如下: 

```java
// 使用反射, 获取Driver实现类对象
Class clazz = Class.forName("com.mysql.cj.jdbc.Driver");
Driver driver = (Driver) clazz.newInstance();
```

其他代码则完全一致

```java
// 源代码: 连接数据库(2)
public void Connection2() throws Exception {
    // 1. 获取Driver实现类对象, 使用反射
    Class clazz = Class.forName("com.mysql.cj.jdbc.Driver");
    Driver driver = (Driver) clazz.newInstance();

    // 2. 提供要连接的数据库
    String url = "jdbc:mysql://localhost:3306/test";

    // 3. 提供连接的用户名和密码
    Properties info = new Properties();
    info.setProperty("user", "root");
    info.setProperty("password", "{$a?jR=6hd|Vy*w;SfVU");

    // 4. 获取链接
    Connection connect = driver.connect(url, info);
    System.out.println(connect);

    // 5. 关闭资源
    connect.close();
}
```

### 改进二

事实上, 我们在实际操作时, 不会直接通过`Driver` 来完成我们需要的操作, 而是用`DriverManager` 类完成需要的步骤, 该类有两个静态方法: 

```java
// 注册驱动
DriverManager.registerDriver(driver);
// 连接数据库, 并返回一个Connection对象
DriverManager.getConnection(url, user, password);
```

用这两个方法可以代替上面的部分步骤

```java
// 源代码: 连接数据库(3)
public void Connection3() throws Exception {
    // 1. 提供三个连接的基本信息
    String url = "jdbc:mysql://localhost:3306/test";
    String user = "root";
    String password = "{$a?jR=6hd|Vy*w;SfVU";

    // 2. 获取Driver实现类对象
    Class clazz = Class.forName("com.mysql.cj.jdbc.Driver");
    Driver driver = (Driver) clazz.newInstance();

    DriverManager.registerDriver(driver);

    // 3. 获取连接
    Connection conn = DriverManager.getConnection(url, user, password);
    System.out.println(conn);

    // 4. 关闭连接
    conn.close();
}
```

### 改进三

实际上, 在我们用反射获取Driver实现类对象时, 会自动注册该类型数据库:

```java
// 源代码: 连接数据库(4)
public void Connection3() throws Exception {
    // 1. 提供三个连接的基本信息
    String url = "jdbc:mysql://localhost:3306/test";
    String user = "root";
    String password = "{$a?jR=6hd|Vy*w;SfVU";

    // 2. 获取Driver实现类对象
    Class clazz = Class.forName("com.mysql.cj.jdbc.Driver");
    // Driver driver = (Driver) clazz.newInstance();
    // DriverManager.registerDriver(driver);

    // 3. 获取连接
    Connection conn = DriverManager.getConnection(url, user, password);
    System.out.println(conn);

    // 4. 关闭连接
    conn.close();
}
```

这是因为, 在该类中有如下静态方法, 我们在学习反射时提到过, 用`forName` 创建类时, 会自动调用类的默认构造函数和静态代码块. 这里通过静态代码块完成了数据库的注册: 

```java
static {
    try {
        DriverManager.registerDriver(new Driver());
    } catch (SQLException var1) {
        throw new RuntimeException("Can't register driver!");
    }
}
```

在MySQL 8.+后, 我们甚至也不用自己创建`Driver` 的实现, 也就是, 如下代码也可以被注释掉:

```java
// 2. 获取Driver实现类对象
// Class clazz = Class.forName("com.mysql.cj.jdbc.Driver");
```

这个可能和JAR包中位于`META-INF/services/java.sql.Driver` 位置的文件有关. **(具体原因暂时未知)**

### 改进四

在上述代码中, 我们仍存在数据和代码没有分离的问题, 因此, 在最后, 我们可以将部分数据提取出来, 保存在文件中, 降低程序的耦合度:

```properties
# 放在src/jdbc.properties中
user=root
password=xxx
url=jdbc:mysql://localhost:3306/test
DriverClass=com.mysql.cj.jdbc.Driver
```

```java
public void Connection5() throws Exception{

    InputStream is = ConnectionTest_1.class.getClassLoader()
            .getResourceAsStream("jdbc.properties");
    Properties prop = new Properties();
    prop.load(is);

    String url = prop.getProperty("url");
    String password = prop.getProperty("password");
    String user = prop.getProperty("user");
    String driverClass = prop.getProperty("driverClass");

    Class.forName(driverClass);

    Connection connection = DriverManager
            .getConnection(url, user, password);

    connection.close();
}
```



实际上, 工作中的数据库连接一般会用数据库连接池的形式, 但是我们还是有必要了解并熟悉连接数据库的基本方式.