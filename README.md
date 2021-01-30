# yegair.github.io

GitHub Pages for [https://yegair.io](https://yegair.io)

## Developing Locally

I encountered some problems running locally on MacOS lately,
so the recommended solution is to use Docker:

```
docker run --rm -it -v $(pwd):/srv/jekyll -p 4000:4000 jekyll/jekyll:3.8 jekyll serve
```

However it should also be possible to run without Docker:

```
bundle exec jekyll serve
```

Then access the page at [http://localhost:4000](http://localhost:4000)
