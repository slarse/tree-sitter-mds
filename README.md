# tree-sitter-mds - A parser for Markdown Simple
This is a companion repository to the article [Syntax highlight anything with Tree-sitter
](https://slar.se/syntax-highlight-anything-with-tree-sitter). It contains a
simple Tree-sitter parser for a tiny subset of Markdown with only headings,
inline code and code blocks, as shown below.

````markdown
# This is a heading
This little paragraph of text with `inline code`

```
const words = ["javascript", "code", "highlighting"];

for (const word of words) {
    console.log(word);
}
```

# This is another heading
Another paragraph with a # in the middle.
````

Read the article for the full story!

# License
The source code of this repository is provided under the [CC0
license](LICENSE). You are free to copy the entire project without attribution,
although attribution is always appreciated.
