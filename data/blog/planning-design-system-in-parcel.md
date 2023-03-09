---
publishDate: "Mar 09 2023"
title: "Planning a design system in Parcel"
description: "A design system document may need the simplicity of a bundler"
excerpt: "UX teams need a fast platform to launch their design system prototypes. Using a zero-configuration platform such as Parcel you can be off to the races with this high-performing JavaScript bundler"
image: "~/assets/images/parcel-feature.jpg"
category: "Tutorials"
tags: [design system, javascript, semantic]
---

## Fast kickoff for rapid deployment

As a UX team, one of your biggest challenges is to quickly and efficiently create prototypes of your design system. You need a platform that can handle the complexities of modern web development while providing a fast and reliable experience. One solution that can help you achieve this goal is Parcel, a zero-configuration platform that bundles your JavaScript code with minimal setup.

[Parcel](https://parceljs.org/) is a high-performing JavaScript bundler that can help you get started with your project quickly. It offers a variety of features that make it an ideal choice for UX teams who need to prototype and test their design systems rapidly. Some of these features include:

- **Zero configuration**: Parcel requires no configuration, which means you can start using it right away without wasting time setting up your project.

- **Fast performance**: Parcel offers fast performance, which means you can work quickly and efficiently without having to wait for long build times.

- **Support for multiple file types**: Parcel supports multiple file types, including HTML, CSS, JavaScript, and images, making it easy to create complex prototypes that include different types of assets.

- **Hot Module Replacement**: Parcel offers Hot Module Replacement, which means that your changes are updated in real-time, allowing you to see the effects of your changes immediately.

- **Flexible plugin system**: Parcel's flexible plugin system allows you to customize your project according to your needs, making it easy to add new features and functionality.

Using Parcel can help your UX team save time and energy, as it simplifies the process of bundling and deploying your code. Additionally, it provides an intuitive and streamlined workflow that allows you to focus on creating the best possible user experience for your customers.

Because Parcel is developed to make rendering files fast and high performing, it is not so great when teams anticipate no minification nor caching. Something we experienced on our deployment was that some team members did not like our rendered files minified. This is something you might need to consider is the workfow and if your team is capable of handling this form of a workflow. Other Static Site Renderers are out now that could be better for the site over use of Parcel. Later this year I plan to setup a design system site based in AstroJS. And I am planning to explore working in Storybook with SvelteKit. There are exciting things in store as we learn tools to build team-supported design systems.

Depending on what hosting platform is used, you may need to prefix file links with hard-coded pathes. This was the hard reality we discovered in deploying our work at ICPSR, in the Univeristy of Michigan. As you see in the scripts below, rendering for local development is not hard at all becuase the files were linked locally. The web host we deployed to required hard-coded links to each file path. While performant, teams did not like file hashing. Out of the box, Parcel hashes files to elimiate caching issues. Fortunately, the [package script](https://parceljs.org/getting-started/library/#package-scripts) was higly customizable, as shown in the example code below, where one may selectively drop content hashing.

```json
// package.json
...
 "scripts": {
    "dev": "npx parcel index.html  --dist-dir ./../dev",
    "build:dev": "NODE_ENV=production npx parcel build --no-cache --no-content-hash --public url=https://static.dev.icpsr.umich.edu/static/",
  },
  ...
```

In conclusion, if you are a UX team looking for a fast and efficient platform to launch your design system prototypes, Parcel is an excellent choice. With its zero-configuration setup, support for multiple file types, fast performance, and flexible plugin system, it can help you create prototypes quickly and easily. So why not give it a try and see how it can help you streamline your development process?
