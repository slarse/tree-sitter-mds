module.exports = grammar({
  name: 'markdownsimple',

  rules: {
    source_file: $ => repeat($.section),

    section: $ => seq(
      $.heading,
      repeat(
        choice(
          $.paragraph,
          $.codeBlock,
        )
      ),
    ),

    paragraph: $ => prec.right(repeat1(
      choice(
        $.inlineCode,
        $.text,
      ),
    )),

    inlineCode: $ => seq(
      '`',
      $.codeText,
      '`',
    ),

    codeBlock: $ => seq(
      '```',
      $.codeText,
      '```',
    ),

    codeText: _ => /[^`]*/,

    heading: _ => /#.+/,

    text: _ => /([^#`]|[^\n]#)+/,
  }
});
