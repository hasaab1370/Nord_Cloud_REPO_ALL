let navBar=document.getElementById("navbar-icon"),navOpen=document.getElementById("navOpen"),closeIcon=document.getElementById("closeIcon"),HideBanner=document.getElementById("bannerCondition");navBar.addEventListener("click",function(){navOpen.classList.toggle("hidden")}),closeIcon.addEventListener("click",function(){navOpen.classList.toggle("hidden")});var themeToggleDarkIcon=document.getElementById("theme-toggle-dark-icon"),themeToggleLightIcon=document.getElementById("theme-toggle-light-icon"),themeToggleBtn=(("dark"===localStorage.getItem("color-theme")||!("color-theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?themeToggleLightIcon:themeToggleDarkIcon).classList.remove("hidden"),document.getElementById("theme-toggle"));function accpeptButton(){HideBanner.classList.add("hidden"),window.localStorage.setItem("banner","hidden")}themeToggleBtn.addEventListener("click",function(){themeToggleDarkIcon.classList.toggle("hidden"),themeToggleLightIcon.classList.toggle("hidden"),localStorage.getItem("color-theme")?"light"===localStorage.getItem("color-theme")?(document.documentElement.classList.add("dark"),localStorage.setItem("color-theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("color-theme","light")):document.documentElement.classList.contains("dark")?(document.documentElement.classList.remove("dark"),localStorage.setItem("color-theme","light")):(document.documentElement.classList.add("dark"),localStorage.setItem("color-theme","dark"))}),"hidden"!==window.localStorage.getItem("banner")?HideBanner.classList.remove("hidden"):HideBanner.classList.add("hidden"),document.querySelectorAll(".kg-gallery-image img").forEach(function(e){var t=e.closest(".kg-gallery-image"),o=e.attributes.width.value,e=e.attributes.height.value;t.style.flex=o/e+" 1 0%"});
//# sourceMappingURL=main.js.map