---
title: shortcode sample
date: 2023-10-04T09:26:26+07:00
---

{% codepen https://codepen.io/dimaslanjaka/pen/KowxjR %}

{% blockquote @DevDocs https://twitter.com/devdocs/status/356095192085962752 %}
NEW: DevDocs now comes with syntax highlighting. http://devdocs.io
{% endblockquote %}

{% codeblock lang:objc %}
[rectangle setX: 10 y: 10 width: 20 height: 20];
{% endcodeblock %}

```objc
[rectangle setX: 10 y: 10 width: 20 height: 20];
```

{% youtube PL9hW1uS6HUfscJ9DHkOSoOX45MjXduUxo 'playlist' %}

{% youtube lJIrF4YjHfQ %}

![image](./image.jpg)

## below is pretext

inline codeblock `build-${{ hashFiles('package-lock.json') }}`

```js
const varx = `build-${{ hashFiles('package-lock.json') }}`
```

```ts
const xvar = `build-${{ hashFiles('package-lock.json') }}`
```

```
const var = `build-${{ hashFiles('package-lock.json') }}`
```

## below is meta info

- published: {{ page.date }}
- modified: {{ page.updated }}