<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Web Components</title>
    <style>
      * {
        box-sizing: border-box;
      }

      html {
        --color-primary: #84c8df;
        font-family: sans-serif;
      }
    </style>
    <script src="tooltip.js" defer></script>
    <script src="confirm-link.js" defer></script>
  </head>
  <body>
    <p>
      <udemy-course-tooltip
        class="important"
        text="Web Components is a set of standards."
      >
        <span class="highlight">Web Components</span>
      </udemy-course-tooltip>
      are awesome!
    </p>
    <udemy-course-tooltip></udemy-course-tooltip>
    <a
      is="udemy-course-confirm-link"
      href="https://www.google.com"
      target="_blank"
    >
      Google
    </a>
  </body>
</html>
