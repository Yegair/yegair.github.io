---
layout: post
title:  "jom - a parser combinator library for the JVM"
date:   2021-01-30 14:26:00 +0100
categories: jom
---

When I learn new programming languages I always need to do so in the scope of some little project,
so I can get a glimpse of what it would be like to use the language for building software at work.
A year ago I was trying out [Rust](https://www.rust-lang.org/) 
and I decided to write a parser for a custom language, that I had wanted to implement for a while but never got to it.

Coming from the Java/JVM world I started to look for parser generators like [antlr](https://www.antlr.org/),
because I liked the idea of just putting a grammar in and getting a fully working parser out.
After trying out several parser generators for Rust, including antlr but also others, 
I was really disappointed by the developer experience.
I already admired Rust (and Cargo) for its exceptionally pleasing developer experience, 
but those parser generator frameworks introduced a complexity that just felt wrong.
So I thought there must be a way of writing a parser without sacrificing the great developer experience,
that is provided by Rust, and I was right.
As soon as I started to no longer look explicitly for parser generators I immediately found [nom](https://github.com/Geal/nom),
a parser combinator framework for Rust.
This was a game changer.

[nom](https://github.com/Geal/nom) provides you with a set of low level parsers, and some higher order combinators, 
all of which are just simple Rust functions.
You can build almost any complex parser that you need by just combining the existing parsers.

### What is jom?

When I came back from Rust to my good ol' JVM (Java, Kotlin, ...),
I really missed such a simple yet powerful library for writing parsers.

For example, I write regular expressions for validating/recognizing some string input on a regular basis,
and I always have to write 10-20 lines of comment just to explain to my coworkers how the regex is intended to work.

> At least I think one should always extensively document regular expressions, 
> because communicating intent to other developers through regex implementations is not that easy.

With a parser combinator like _nom_ I could do the same thing,
but the code which does the parsing/recognition would be maintainable and comprehensible.

I had a look at two seemingly promising parser combinator libraries, 
namely [jparsec](https://github.com/jparsec/jparsec) 
and [funcj.parser](https://github.com/typemeta/funcj/tree/master/parser),
but at least in my opinion they both fail in terms of the simplicity [nom](https://github.com/Geal/nom) achieves.

So I decided to just port _nom_ to the JVM and call the result [jom](https://yegair.io/jom).

### A little excursion into parser combinators

Think of a parser as a function which consumes some input (a stream of symbols, e.g. bytes or characters),
until it is done or has detected that the stream can not be parsed.
When a parser matches the input it produces some output, otherwise it produces an error.

```
Parser: (input) => <remaining_input, output> | <remaining_input, error>
```

The result of a parser is then some output or an error together with the remaining input.
The remaining input can then be parsed by another parser, this way parsers are combined.

Using this approach it becomes quiet intuitive to write complex parsers.
For example a parser which parses words that are separated by whitespaces could look something like

```
words = terminated(
  many1(
    preceded(
      multispace0, 
      alpha1
    )
  ), 
  multispace0
)
```

This example uses the parsers `multispace0` which matches zero or more white space characters like simple spaces, `\n` etc.,
and `alpha1` which matches one or more alphabetical characters.
They are combined using some combinators like `preceded(parser, parser)`,
which returns the result of the second parser if both parser match.
`terminated(parser, parser)` works just like `preceded` but it returns the result of the first parser.
`many1(parser)` runs the given parser in a loop until it no longer matches, 
thus producing a list of one or more results from the given parser.

Consider some input `"  foo bar   baz  123"` being given to the `words` parser.
It will match all alphabetical words with their surrounding white spaces.
When it encounters the sequence `"123"` it no longer matches and thus stops parsing.

```
words("  foo bar   baz  123") 
=>  <"123", ["foo", "bar", "baz"]>
```

So it returns the remaining input `"123"` as well as the output `["foo", "bar", "baz"]`.

Now it is just a small step to write a parser which can match the entire input.
First a second parser is required which can also match numbers.

```
numbers = terminated(
  many1(
    preceded(
      multispace0, 
      digit1
    )
  ), 
  multispace0
)
```

It works just like the `words` parser, but it matches numerical digits (`digit1`) instead of alphabetical characters.

Finally the two parsers can be combined.

```
words_and_numbers = many0(alt(words, numbers))
```

`alt(parsers...)` is a combinator which runs the given parsers until one matches. 
It then returns the result of this parser.
`many0` works just like `many1` but it succeeds even if the embedded parser doesn't match at all.

Using the `words_and_numbers` parser with the previously given input would now parse all of it.

```
words_and_numbers("  foo bar   baz  123") 
=>  <"", [["foo", "bar", "baz"], ["123"]]>
```

I hope you can see why parser combinators are an approach to writing parsers,
which is at least on par with parser generators like _antlr_.


