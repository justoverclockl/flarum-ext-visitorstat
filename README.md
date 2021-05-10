![Immagine 2021-05-10 180016](https://user-images.githubusercontent.com/79002016/117688979-9a41c600-b1b9-11eb-9ea1-5e0d9de7ff7f.png)
# Visitorstat

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/justoverclock/flarum-ext-visitorstat.svg)](https://packagist.org/packages/justoverclock/flarum-ext-visitorstat) [![Total Downloads](https://img.shields.io/packagist/dt/justoverclock/flarum-ext-visitorstat.svg)](https://packagist.org/packages/justoverclock/flarum-ext-visitorstat)

A [Flarum](http://flarum.org) extension. Add a simple visitor counter to sidenav


### Usage

Visitor counter works through a free api, u need to create yours for free at:
https://countapi.xyz/

Or simply copy and paste this link (make sure to change your-namespace with your unique namespace
```
https://api.countapi.xyz/hit/YOUR-NAMESPACE/visits
```


### Installation

Install with composer:

```sh
composer require justoverclock/flarum-ext-visitorstat:"*"
```

### Updating

```sh
composer update justoverclock/flarum-ext-visitorstat:"*"
php flarum migrate
php flarum cache:clear
```

### Links

- [Packagist](https://packagist.org/packages/justoverclock/flarum-ext-visitorstat)
- [GitHub](https://github.com/justoverclock/flarum-ext-visitorstat)
- [Discuss](https://discuss.flarum.org/d/PUT_DISCUSS_SLUG_HERE)
