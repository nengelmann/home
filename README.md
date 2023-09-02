<br />
<p align="center">
  <h1 align="center">Portfolio Site ✨</h1>

  <p align="center">
    This is my personal static portfolio site hosted with GitHub Pages.
    <br /> 
    Click here -> <a href="https://nengelmann.github.io/home">Portfolio Site </a>
    <br />
    <br />
  </p>
</p>

[![Site preview](/public/social-image.png)](https://nengelmann.github.io/home)

## Structure ⚓

- Navigation bar (optional)
- Body
  - Name | Profession
  - Contact / Follow / Find me / Facebook / LinkedIn / GitHub / Instagram / Email / CodePen
  - Resume | About me
- About Me
  - Display picture (optional)
  - About myself, my Interests, Goals and Hobbies
  - Things I'm good at (Skills)
  - Resume button
- Recent Projects (using GitHub API) (optional)
- Leadership (optional)
  - Paragraph
  - Carousel images
- Skills (optional)
  - Technical Skills
  - Soft Skills
- Footer
  - Footer Note (optional)
  - Copyrights - open source
  - Acknowledgements

## Prerequisites 🍪

You should have [Node.js](https://nodejs.org/en/) and [Git](https://git-scm.com/) installed on your PC. You should also own a GitHub account.

## Setup And Deployment 🔧

1. To Get Started, Fork this repository to your GitHub account:
2. Clone the forked repo from your account using:

   ```bash
     git clone https://github.com/<your-username>/home.git
   ```

3. Open in editor and edit [src/editable-stuff/config.js](./src/editable-stuff/config.js) file.

4. Add your resume as <resume.pdf> in place of [src/editable-stuff/resume.pdf](./src/editable-stuff/) or link it.

5. Edit [title](./public/index.html#L34) and meta [description](./public/index.html#L13) in [public/index.html](./public/index.html).
6. Change URL in [package.json](./package.json) file:

   ```json
    "homepage": "https://<your-username>.github.io/home"
   ```

   Or for deployment at custom domain, refer [create-react-app.dev](https://create-react-app.dev/docs/deployment/#step-1-add-homepage-to-packagejson)

7. After editing run the following bash commands:

   ```bash
   npm install
   npm start
   ```

8. To deploy website, run:

   ```bash
    npm run build
    npm run deploy
   ```

   Or for deployment at \<username>.github.io, refer [READMEdocs/custom-deployment.md](./READMEdocs/custom-deployment.md) and [pages.js](./pages.js)

9. Congrats your site is up and running. To see it live, visit:

   ```https
     https://<your-username>.github.io/home
   ```

10. To change the thumbnail image:

    - Navigate to the "public" folder.
    - There you will see "social-image.png".
    - Delete it.
    - Take a screenshot of your version and rename it "social-image.png" and place it there.

Next time if you make changes, repeat from step 8.

# License

Distributed under the `LGPL-3.0 license` License. See [LICENSE](https://github.com/nengelmann/home/blob/main/LICENSE) for more information.

This repo is based on [Hashir Shoaibs](https://github.com/hashirshoaeb) repository [/hashirshoaeb/home](https://github.com/hashirshoaeb/home).

nengelmann.github.io
portfolio page hosted on github pages

nvm install v18.13.0
