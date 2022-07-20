import React from 'react'

import { ICON_PATHS } from './constants'

const RenderSocialIcon = ({
  href,
  name,
  iconPath,
}) =>
  <a
    class="button is-medium"
    href={href}
    target="_blank"
  >
    <span class="icon is-small">
      <svg
        class={`svg-inline--fa fa-${name} fa-fw`}
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon={name}
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        data-fa-i2svg=""
      >
        <path
          fill="currentColor"
          d={iconPath}
        >
        </path>
      </svg>
    </span>
  </a>

const Footer = () => {
  return (
    <footer class="footer section is-primary is-small has-text-centered">
      <div class="content has-text-centered">
        <a href='/'>
          <img class="logo" height="52px" src='/white-logo.png'></img>
        </a>
        <div class="columns is-centered">
          <div class="column is-one-third">
            <h1 class="title is-size-4-touch">Enjoying, learning, &amp; sharing my human skills.</h1>
          </div>
        </div>
        <div class="social-icons">
          <p class="field">
            {RenderSocialIcon({ href: "", name: 'twitter', iconPath: ICON_PATHS.TWITTER })}
            {RenderSocialIcon({ href: "", name: 'linkedin-in', iconPath: ICON_PATHS.LINKEDIN })}
            {/* {RenderSocialIcon({ href: "", name: 'product-hunt', iconPath: ICON_PATHS.LINKEDIN })} */}
            {RenderSocialIcon({ href: "", name: 'envelope', iconPath: ICON_PATHS.EMAIL })}
          </p>

        </div>
        <div class="made-by-bulma">
          <a href="https://bulma.io">
            <img src="https://bulma.io/images/made-with-bulma--white.png" alt="Made with Bulma" width="163" height="31" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
