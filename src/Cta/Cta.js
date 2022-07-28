import React from "react";

const Cta = () => {
  return (
    <section class="section call-to-action is-primary has-text-centered">
      <div class="container is-narrow">
        <div class="box">
          <div class="columns level">
            <div class="column level-item">
              <h1 class="title">Start a project</h1>
            </div>
            <div class="column level-item">
              <p>Interested in working together? Let's talk and drink a coffee.</p>
            </div>
            <div class="column level-item">
              <a class="button is-success is-outlined is-rounded is-medium has-text-weight-normal">
                <span class="icon">
                  <svg
                    class="svg-inline--fa fa-hand-horns"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="hand-horns"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    data-fa-i2svg=""
                    width="18px"
                  >
                    <path
                      fill="currentColor"
                      d="M376 64c-39.69 0-72 31.86-72 71.02v26.17C300.2 160.5 296.3 160 292.3 160C279.3 160 266.8 163.7 256 170.5C245.2 163.7 232.7 160 219.8 160C215.7 160 211.8 160.5 208 161.2V72c0-39.7-32.3-72-71.1-72C96.32 0 64.02 32.3 64.02 72v160.4l-7.113 1.188C23.94 240.7 0 270.3 0 303.1v80c0 22.38 10.12 43.09 27.81 56.84l45.97 35.75c29.34 22.83 65.97 35.41 103.2 35.41L271.8 512C368.9 512 448 432.9 448 335.8V135C448 95.86 415.7 64 376 64zM272 228.3C272 217.1 281.1 208 292.3 208s20.25 9.078 20.25 20.25v55.5C312.5 294.9 303.4 304 292.3 304S272 294.9 272 283.8V228.3zM240 228.3v55.5c0 .4414-.2246 .8105-.252 1.246C238.5 255.4 220.9 234.4 200.4 223.9C202.4 214.9 210.1 208 219.8 208C230.9 208 240 217.1 240 228.3zM112 72c0-13.23 10.78-24 23.1-24c13.22 0 24 10.77 24 24v123.9C156.4 202.6 153.8 209.8 152.6 217.6L112 224.4V72zM400 335.8C400 406.5 342.5 464 271.8 464l-94.81-.0156c-26.56 0-52.72-8.984-73.69-25.3l-45.97-35.75C51.47 398.4 48 391.3 48 383.1v-80c0-11.23 7.969-21.11 17.88-23.27l97-16.19c1.692-.3629 3.383-.5372 5.05-.5372c11.86 0 24.09 9.439 24.09 24.06c0 11.04-7.513 20.95-17.17 23.09L116.8 319c-12.03 1.633-20.78 11.92-20.78 23.75c0 20.24 18.82 24.08 23.69 24.08c1.161 0 2.339-.0863 3.526-.2646l59.88-8.172c7.666-1.646 14.58-4.74 21.01-8.496C209.1 351.1 214.3 352 219.8 352C232.7 352 245.2 348.3 256 341.5C266.8 348.3 279.3 352 292.3 352c37.63 0 68.25-30.61 68.25-68.25v-55.5c0-11.75-3.254-22.64-8.5-32.3V135C352 122.3 362.8 112 376 112s24 10.33 24 23.02V335.8z">
                    </path>
                  </svg>
                  <i class="fa-regular fa-hand-horns"></i>
                </span>
                <span>Let's start</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cta
