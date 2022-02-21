import { staticAny } from "@/types/common";

let callbacks: Array<
  (error: Error | null, scripts: HTMLElement) => void
> | null = [];

function loadedTinymce() {
  // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2144
  // check is successfully downloaded script
  return window.tinymce;
}

const dynamicLoadScript = (
  src: string,
  callback: (error: Error | null, scripts: HTMLElement) => void
): void => {
  const existingScript = document.getElementById(src);

  const cb =
    callback ||
    function () {
      /**/
    };

  if (!existingScript) {
    const script = document.createElement("script");

    script.src = src; // src url for the third-party library being loaded.
    script.id = src;
    document.body.appendChild(script);
    callbacks && callbacks.push(cb);
    const onEnd = "onload" in script ? stdOnEnd : ieOnEnd;

    onEnd(script);
  }

  if (existingScript && cb) {
    if (loadedTinymce()) {
      cb(null, existingScript);
    } else {
      callbacks && callbacks.push(cb);
    }
  }

  function stdOnEnd(script: HTMLElement) {
    script.onload = function () {
      // this.onload = null here is necessary
      // because even IE9 works not like others
      this.onerror = this.onload = null;

      for (const cb of callbacks as Array<
        (error: Error | null, scripts: HTMLElement) => void
      >) {
        cb(null, script);
      }
      callbacks = null;
    };

    script.onerror = function () {
      this.onerror = this.onload = null;
      cb(new Error("Failed to load " + src), script);
    };
  }

  function ieOnEnd(script: staticAny) {
    script.onreadystatechange = function () {
      if (this.readyState !== "complete" && this.readyState !== "loaded")
        return;
      this.onreadystatechange = null;

      for (const cb of callbacks as Array<
        (error: Error | null, scripts: HTMLElement) => void
      >) {
        cb(null, script); // there is no way to catch loading errors in IE8
      }
      callbacks = null;
    };
  }
};

export default dynamicLoadScript;
