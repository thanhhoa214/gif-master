# GifMaster

This project was focused on setting up mono-repo infrastructure using [Nx](https://nx.dev) for sharing and reusing libraries through Angular best practices collected from my own experiences with the [Giphy-API](https://developers.giphy.com/) demonstration.

## Table of Contents

- [GifMaster](#gifmaster)
  - [Table of Contents](#table-of-contents)
  - [Technologies](#technologies)
  - [Features Overview](#features-overview)
  - [Deep-dived Libraries](#deep-dived-libraries)
    - [shared/app-config](#sharedapp-config)
    - [shared/dark-mode](#shareddark-mode)
    - [shared/language](#sharedlanguage)
    - [shared/state-management](#sharedstate-management)
    - [shared/util](#sharedutil)
    - [gif-master/gif-views/feature](#gif-mastergif-viewsfeature)
    - [gif-master/gif-views/data-access](#gif-mastergif-viewsdata-access)
    - [gif-master/gif-views/ui](#gif-mastergif-viewsui)
    - [gif-master/ui](#gif-masterui)
  - [Future Plan](#future-plan)
  - [OpenToWork](#opentowork)
    - [Linkedin:](#linkedin)
    - [My Resume](#my-resume)

## Technologies

- [Nx Workspace](https://nx.dev/) (12.8.0) for setting up project infrastructure.
- [Angular](https://angular.io/) (12.1.0)
- [Taiga UI](https://taiga-ui.dev/) (2.14.0) for beautiful on-the-fly UI library.
- [TailwindCSS](https://tailwindcss.com/) 2.2.8 for quickly customizing through utility-first classes.
- [NGXS](https://www.ngxs.io/) (3.3.2) for state management.
- [Transloco](https://ngneat.github.io/transloco/) (2.22.0) for supporting multiple languages with truly translation scope and lazy loading out of the box.

## Features Overview

- Dark-mode supported
- Multi-language (vi, en) supported
- Synchronizing state through localStorage
- Auto-title by pre-configuring route data.
- Infinite-scrolled supported by [ngx-infinite-scroll](https://www.npmjs.com/package/ngx-infinite-scroll)
- Strong-typed API thanks to [@types/giphy-api](https://www.npmjs.com/package/@types/giphy-api)
- List trending gifs with searchable
- Shareable link by synchronizing displayed UI with URL queryarams
- Share on Facebook
- Copy shareable link to clipboard by [ngx-clipboard](https://www.npmjs.com/package/ngx-clipboard)

## Deep-dived Libraries

Follows 4 types of a specific library by [Nx Library Types](https://nx.dev/latest/angular/structure/library-types)

### shared/app-config

- Type: util
- Feature:
  - Supports environment injection token > [app-config.token.ts](https://github.com/thanhhoa214/gif-master/blob/main/libs/shared/app-config/src/lib/app-config.token.ts)

### shared/dark-mode

- Type: data-access
- Feature:
  - Supports dark-mode with lazy-loading NGXS State > [dark-mode.module.ts](https://github.com/thanhhoa214/gif-master/blob/main/libs/shared/dark-mode/src/lib/dark-mode.module.ts)
  - Presets mode by listening to 'prefers-color-scheme' match.changes > [dark-mode.service.ts](https://github.com/thanhhoa214/gif-master/blob/main/libs/shared/dark-mode/src/lib/dark-mode.service.ts)

### shared/language

- Type: data-access
- Feature:
  - Supports multiple languages while hiding transloco behind settings > [language.module.ts](https://github.com/thanhhoa214/gif-master/blob/main/libs/shared/language/src/lib/language.module.ts)
  - Simple Unit Testing Store > [language.state.spec.ts](https://github.com/thanhhoa214/gif-master/blob/main/libs/shared/language/src/lib/store/language.state.spec.ts)

### shared/state-management

- Type: data-access
- Feature:
  - Wraps NGXS-related packages > [state-management.module.ts](https://github.com/thanhhoa214/gif-master/blob/main/libs/shared/state-management/src/lib/state-management.module.ts)
  - Synchronizes with **localStorage** by predefined cache states in `key` of **NgxsStoragePluginModule** > [Line 13 state-management.module.ts](https://github.com/thanhhoa214/gif-master/blob/main/libs/shared/state-management/src/lib/state-management.module.ts#L13)

### shared/util

- Type: util
- Feature:
  - Contains services, custom functions, pipes, etc
  - Auto title through route data
    1. Check [Line 16 app.component.ts](https://github.com/thanhhoa214/gif-master/blob/main/apps/gif-master/src/app/app.component.ts#L16) for registration
    2. Check [Line 8 routes.ts](https://github.com/thanhhoa214/gif-master/blob/main/libs/gif-master/gif-views/feature/src/lib/routes.ts#L8) for configuration

### gif-master/gif-views/feature

- Type: feature
- Feature:
  - Contains smart components, API calls, routes definitions.
  - Scopes translations for only component use > [Line 33 detail.component.ts](https://github.com/thanhhoa214/gif-master/blob/main/libs/gif-master/gif-views/feature/src/lib/detail/detail.component.ts#L33)
  - Copies link to clipboard at [Line 59 detail.component.ts](https://github.com/thanhhoa214/gif-master/blob/main/libs/gif-master/gif-views/feature/src/lib/detail/detail.component.ts#L59)
  - Shares link on Facebook at [Line 72 detail.component.ts](https://github.com/thanhhoa214/gif-master/blob/main/libs/gif-master/gif-views/feature/src/lib/detail/detail.component.ts#L72), remember to add Facebook SDK at [index.html](https://github.com/thanhhoa214/gif-master/blob/main/apps/gif-master/src/index.html) and init FacebookService at [app.component.ts](https://github.com/thanhhoa214/gif-master/blob/main/apps/gif-master/src/app/app.component.ts#L18)
  - Updates `queryParams` without triggering router at [Lines 63-73 listing.component.ts](https://github.com/thanhhoa214/gif-master/blob/main/libs/gif-master/gif-views/feature/src/lib/listing/listing.component.ts#L63)

### gif-master/gif-views/data-access

- Type: data-access
- Feature:
  - Calls API, updates store and exposes declarative actions
  - Lazy loading store at [Line 7 data-access.module.ts](https://github.com/thanhhoa214/gif-master/blob/main/libs/gif-master/gif-views/data-access/src/lib/data-access.module.ts#L7)

### gif-master/gif-views/ui

- Type: ui
- Feature:
  - Contains exported components with highly customizable through `@Input` and `@Output` decorators at [detail.component.ts](https://github.com/thanhhoa214/gif-master/blob/main/libs/gif-master/gif-views/ui/src/lib/detail/detail.component.ts)

### gif-master/ui

UI library for **gif-master** app only

- Type: ui
- Feature:
  - Contains [layout.component.ts](https://github.com/thanhhoa214/gif-master/blob/main/libs/gif-master/ui/src/lib/layout/layout.component.ts), [navbar.component.ts](https://github.com/thanhhoa214/gif-master/blob/main/libs/gif-master/ui/src/lib/navbar/navbar.component.ts)

## Future Plan

- Integrated with Google, Facebook, and Zalo login
- PWA supported
- Hybrid applications with Ionic
- E2E Testing and Unit Testing
- Recommended gifs
- Random gif
- Gif List filter by Rating

## OpenToWork

I'm finding a company where I willing dedicate for least 2 years.

- Using Angular
- Using English communication
- Having a roader way to work Singapore

### Linkedin:

<a href="http://linkedin.com/in/thanhhoa214">Hoa Nguyen (Rin)</a>

### My Resume

<a href="https://github.com/thanhhoa214/gif-master/raw/main/apps/gif-master/src/assets/myCV.pdf" download>Download my resume</a>
