Idea for Spring Introduction Dojo:

> What is a Spring Bean? What is a POJO? What is the difference between a Spring Bean and a POJO?

We plan to answer the questions above.

Consider:

```java
@Component
public class FirstClass {
  @Autowired
  private OtherClass otherClass;
}
```

and 

```java
public class SecondClass {
  private YetAnotherClass yetAnotherClass;
  public YetAnotherClass getYetAnotherClass() { return this.yetAnotherClass; }
  public void setYetAnotherClass(YetAnotherClass yetAnotherClass) { this.yetAnotherClass = yetAnotherClass; }
}
```

Question:

> Which one is a Spring Bean and which one is a POJO?
>
> - a) `FirstClass` is a Spring Bean and `SecondClass` is a POJO
> - b) `SecondClass` is a Spring Bean and `FirstClass` is a POJO
> - c) Both are Spring Beans
> - d) Both are POJOs
> - e) Well, it depends

If you can't answer this question for sure, then this dojo is for you.

We will:

- Create a simple Spring context (through a XML configuration file)
- Load the simplest possible Spring Bean
- Compare it to a POJO

If time allows:

- Create a simple test for each class
- Show how Dependency Injection helps testing
