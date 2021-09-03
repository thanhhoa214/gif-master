# GifMaster

This project was focused on setting up mono-repo infrastructure using [Nx](https://nx.dev) for sharing and reusing libraries through Angular best practices collected from my own experiences with the [Giphy-API](https://developers.giphy.com/) demonstration.

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
- Copy shareable link ability

### Deep-dived Libraries

#### app-config

- Feature: Supported environment injection token.
- Type: feature
- Check out: [app-config.token.ts](https://github.com/thanhhoa214/gif-master/blob/main/libs/shared/app-config/src/lib/app-config.token.ts)

#### dark-mode

- Feature: Supported dark-mode with NGXS state management and preset by listening to
- Type: feature

## Future Plan

- Integrated with Google, Facebook, and Zalo login
- PWA supported
- Hybrid applications with Ionic
- E2E Testing and Unit Testing
- Recommended gifs
- Random gif
- Gif List filter by Rating
-
