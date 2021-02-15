# TO-DO Project Competition

> Competition to implement the shortest TO-DO project, If you create a shorter implementation, please open an issue with the link to your repository.

## Lines Of Code

```bash
$ cloc source/
       7 text files.
       7 unique files.
       0 files ignored.

github.com/AlDanial/cloc v 1.86  T=0.01 s (785.8 files/s, 24696.8 lines/s)
-------------------------------------------------------------------------------
Language                     files          blank        comment           code
-------------------------------------------------------------------------------
JavaScript                       7             34              8            178
-------------------------------------------------------------------------------
SUM:                             7             34              8            178
-------------------------------------------------------------------------------
```

## Rules

- Cannot use external libraries, only snowpack, or another bundler for development.
- The model should be:

```javascript
const projects = [
  {
    name: "project 1",
    todos: [
      {
        name: "todo 1",
        priority: "low" | "medium" | "high",
        status: "todo" | "complete" | "inprogress",
      },
    ],
  },
  {
    name: "project 2",
    todos: [
      {
        name: "todo 2",
        priority: "low" | "medium" | "high",
        status: "todo" | "complete" | "inprogress",
      },
    ],
  },
]
```
