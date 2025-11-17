const chapter4 = {
        title: "Chapter 4 (Java Programming)",
        description: "Core Java programming concepts including variables, control structures, methods, and object-oriented fundamentals from YMT112 curriculum.",
        questions: [
    {
        question: "What is the correct way to declare a variable in Java?",
        options: ["var x = 5;", "int x = 5;", "x = 5;", "declare int x = 5;"],
        correct: 1,
        explanation: "In Java, variables are declared with their data type followed by the variable name: 'int x = 5;'"
    },
    {
        question: "Which of the following is a valid Java identifier?",
        options: ["2variable", "class", "_myVar", "my-var"],
        correct: 2,
        explanation: "Java identifiers can start with letters, underscore, or dollar sign. '_myVar' is valid, while others violate naming rules."
    },
    {
        question: "What is the output of: System.out.println(5 + 3 + \"Java\");",
        options: ["53Java", "8Java", "5 + 3Java", "Java8"],
        correct: 1,
        explanation: "Java evaluates from left to right: 5 + 3 = 8, then 8 + \"Java\" = \"8Java\" (string concatenation)."
    },
    {
        question: "Which loop is guaranteed to execute at least once?",
        options: ["for loop", "while loop", "do-while loop", "enhanced for loop"],
        correct: 2,
        explanation: "do-while loop checks the condition after executing the loop body, guaranteeing at least one execution."
    },
    {
        question: "What is method overloading in Java?",
        options: ["Using same method name with different parameters", "Inheriting methods from parent class", "Calling methods multiple times", "Creating methods with same signature"],
        correct: 0,
        explanation: "Method overloading allows multiple methods with the same name but different parameter lists in the same class."
    },
    {
        question: "Which access modifier makes a member accessible only within the same class?",
        options: ["public", "protected", "private", "default"],
        correct: 2,
        explanation: "The 'private' access modifier restricts access to members only within the same class."
    },
    {
        question: "What is the difference between '==' and '.equals()' in Java?",
        options: ["No difference", "== compares references, .equals() compares content", "== compares content, .equals() compares references", "Both compare references"],
        correct: 1,
        explanation: "== compares object references (memory addresses), while .equals() compares the actual content of objects."
    },
    {
        question: "Which of the following is NOT a primitive data type in Java?",
        options: ["int", "boolean", "String", "double"],
        correct: 2,
        explanation: "String is a reference type (class), not a primitive data type. Primitive types include int, boolean, double, etc."
    },
    {
        question: "What happens if you don't initialize a local variable in Java?",
        options: ["It gets default value", "Compilation error", "Runtime error", "It becomes null"],
        correct: 1,
        explanation: "Local variables must be explicitly initialized before use, otherwise the compiler will generate an error."
    },
    {
        question: "Which keyword is used to inherit from a class in Java?",
        options: ["implements", "extends", "inherits", "super"],
        correct: 1,
        explanation: "The 'extends' keyword is used for class inheritance in Java."
    },
    {
        question: "What is the purpose of the 'static' keyword in Java?",
        options: ["Makes variables constant", "Belongs to class rather than instance", "Prevents inheritance", "Makes methods private"],
        correct: 1,
        explanation: "The 'static' keyword makes members belong to the class itself rather than to any specific instance."
    },
    {
        question: "Which statement about Java arrays is correct?",
        options: ["Arrays can change size dynamically", "Array indices start from 1", "Arrays are objects in Java", "Arrays can only store primitive types"],
        correct: 2,
        explanation: "In Java, arrays are objects that have a fixed size and are accessed using zero-based indexing."
    }
        ]
    };
