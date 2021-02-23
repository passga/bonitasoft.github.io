var colors=["--color-white","--color-text-light","--color-smoke-10","--color-smoke-30","--color-smoke-50","--color-smoke-70","--color-smoke-90","--color-gray-10","--color-gray-30","--color-gray-50","--color-gray-70","--color-jet-20","--color-jet-30","--color-jet-50","--color-jet-70","--color-jet-80","--color-black","--color-blue-bonita","--color-red-bonita","--color-unfocused","--color-focused","--color-link","--color-link-hover","--color-nav-item","--color-admonition-note","--color-admonition-note-bg","--color-admonition-tip","--color-admonition-tip-bg","--color-admonition-important","--color-admonition-important-bg","--color-admonition-warning","--color-admonition-warning-bg","--color-admonition-caution","--color-admonition-caution-bg"],filters=["--filter-icon","--filter-icon-search"];function toDarkTheme(){localStorage.setItem("theme","dark"),colors.forEach(function(o){updateCSSProperty(o,o+"-dark")}),filters.forEach(function(o){updateCSSProperty(o,o+"-dark")})}function toLightTheme(){localStorage.setItem("theme","light"),colors.forEach(function(o){updateCSSProperty(o,o+"-light")}),filters.forEach(function(o){updateCSSProperty(o,o+"-light")})}function updateCSSProperty(o,t){document.documentElement.style.setProperty(o,getComputedStyle(document.body).getPropertyValue(t))}function toggleDarkThemeMode(o){(o.checked?toDarkTheme:toLightTheme)()}function isDarkTheme(){return"dark"===localStorage.getItem("theme")?"checked":"unchecked"}("dark"===localStorage.getItem("theme")?toDarkTheme:toLightTheme)();