{"version":3,"sources":["createpage.bundle.js"],"names":["this","BX","Landing","UI","exports","main_core","main_loader","landing_ui_panel_content","landing_loc","landing_backend","landing_env","landing_sliderhacks","_templateObject2","data","babelHelpers","taggedTemplateLiteral","_templateObject","CreatePage","_Content","inherits","createClass","key","value","getInstance","instance","title","Loc","getMessage","id","_this","classCallCheck","possibleConstructorReturn","getPrototypeOf","call","defineProperty","assertThisInitialized","Cache","MemoryCache","Dom","addClass","layout","overlay","appendFooterButton","Button","BaseButton","text","onClick","onSave","bind","className","hide","renderTo","document","body","getTitleField","cache","remember","Field","Text","textOnly","getCodeField","getForm","_this2","Form","BaseForm","fields","show","_ref","arguments","length","undefined","_ref$title","style","footer","range","getSelection","getRangeAt","node","Block","Node","currentNode","isEditable","currentField","capitalizedTitle","replace","c","toUpperCase","setValue","translitedTitle","translit","change_case","replace_space","replace_other","clear","appendForm","get","prototype","getSuccessMessage","envOptions","Env","getOptions","urlMask","params","sef_url","landing_view","siteId","site_id","editLink","Tag","render","getFailMessage","_this3","backend","Backend","getValue","code","_Env$getInstance$getO","folderId","folder_id","loader","Loader","createPage","then","result","Promise","resolve","setTimeout","Type","isNumber","successMessage","getType","_link","querySelector","Event","event","preventDefault","SliderHacks","reloadSlider","href","window","parent","append","content","concat","removeAllRanges","addRange","enableEdit","tmpHref","encode","getRandom","selection","execCommand","link","anchorNode","parentElement","attr","target","isString","innerText","isPlainObject","attrs","Content","Panel"],"mappings":"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","file":"createpage.bundle.map.js"}