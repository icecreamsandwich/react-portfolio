import React, { Component } from "react";

class About extends Component {
  render () {
    return (
      <div>
        <link rel="stylesheet" href="//cdn2.editmysite.com/css/old/blog_moderation.css?buildTime=1541036564" type="text/css" media="screen,projection" />
        <link rel="stylesheet" href="//cdn2.editmysite.com/css/old/slideshow/slideshow.css?buildTime=1541036564" type="text/css" media="screen,projection" />
        <link rel="stylesheet" href="//cdn2.editmysite.com/css/old/weebly_lightbox.css?buildTime=1541036564" type="text/css" media="screen,projection" />
        <link rel="stylesheet" href="//cdn2.editmysite.com/css/util/ui.css?buildTime=1541036564" type="text/css" media="screen,projection" />
        <link rel="stylesheet" href="//cdn2.editmysite.com/css/main.css?buildTime=1541036564" type="text/css" media="screen,projection" />
        <link rel="stylesheet" href="//cdn2.editmysite.com/css/editor-site-shared.css?buildTime=1541036564" type="text/css" media="screen,projection" />
        <link rel="stylesheet" href="//cdn2.editmysite.com/css/editor-site.css?buildTime=1541036564" type="text/css" media="screen,projection" />
        <link rel="stylesheet" id="wsite-base-style" href="//cdn2.editmysite.com/css/sites.css?buildTime=1541036564" type="text/css" media="screen,projection" />
        <link rel="stylesheet" href="//cdn2.editmysite.com/css/old/weebly_dialog.css?buildTime=1541036564" type="text/css" media="screen,projection" />
        <link rel="stylesheet" href="//cdn2.editmysite.com/css/old/mediaelementplayer.css?buildTime=1541036564" type="text/css" media="screen,projection" />
        <link rel="stylesheet" href="//cdn2.editmysite.com/css/social-icons.css?buildTime=1541036564" type="text/css" media="screen,projection" />
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,300,400,700" />
        <style dangerouslySetInnerHTML={{__html: "\n\t\t@font-face {\n\t\t\tfont-family: 'wicons';\n\t\t\tsrc: url(//cdn2.editmysite.com/fonts/wIcons/wicons.eot?buildTime=);\n\t\t\tsrc: url(//cdn2.editmysite.com/fonts/wIcons/wicons.eot?buildTime=#iefix) format('embedded-opentype'),\n\t\t\t\t\t url(//cdn2.editmysite.com/fonts/wIcons/wicons.woff?buildTime=) format('woff'),\n\t\t\t\t\t url(//cdn2.editmysite.com/fonts/wIcons/wicons.ttf?buildTime=) format('truetype'),\n\t\t\t\t\t url(//cdn2.editmysite.com/fonts/wIcons/wicons.svg?buildTime=#wicons) format('svg');\n\t\t\tfont-weight: normal;\n\t\t\tfont-style: normal;\n\t\t}\n\t\t/* Hack to smooth out font rendering on Chrome for Windows */\n\t\t@media screen and (-webkit-min-device-pixel-ratio: 0) {\n\t\t\t@font-face {\n\t\t\t\tfont-family: 'wicons';\n\t\t\t\tsrc: url(//cdn2.editmysite.com/fonts/wIcons/wicons.svg?buildTime=#wicons) format('svg');\n\t\t\t}\n\t\t}\n\t\n\t\t@font-face {\n\t\t\tfont-family: 'wsocial';\n\t\t\tsrc: url(//cdn2.editmysite.com/fonts/wSocial/wsocial.eot?buildTime=);\n\t\t\tsrc: url(//cdn2.editmysite.com/fonts/wSocial/wsocial.eot?buildTime=#iefix) format('embedded-opentype'),\n\t\t\t\t\t url(//cdn2.editmysite.com/fonts/wSocial/wsocial.woff?buildTime=) format('woff'),\n\t\t\t\t\t url(//cdn2.editmysite.com/fonts/wSocial/wsocial.ttf?buildTime=) format('truetype'),\n\t\t\t\t\t url(//cdn2.editmysite.com/fonts/wSocial/wsocial.svg?buildTime=#wsocial) format('svg');\n\t\t\tfont-weight: normal;\n\t\t\tfont-style: normal;\n\t\t}\n\t\t/* Hack to smooth out font rendering on Chrome for Windows */\n\t\t@media screen and (-webkit-min-device-pixel-ratio: 0) {\n\t\t\t@font-face {\n\t\t\t\tfont-family: 'wsocial';\n\t\t\t\tsrc: url(//cdn2.editmysite.com/fonts/wSocial/wsocial.svg?buildTime=#wsocial) format('svg');\n\t\t\t}\n\t\t}\n\t" }} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0" />
        <div id="_editor-ui">
          <div id="_editor-ui-spotlight" />
          <div id="editMenu" className="w-ui" style={{display: 'none'}}>
            <div id="editMenuChild">
              <a id="menuitem-b" className="menuitem w-icon-text-bold" href="#" title="Bold" data-command="bold" />
              <a id="menuitem-i" className="menuitem w-icon-text-italic" href="#" title="Italic" data-command="italic" />
              <a id="menuitem-u" className="menuitem w-icon-text-underline" href="#" title="Underline" data-command="underline" />
              <div className="menuitem group">
                <a id="menuitem-if" className="w-icon-increase" href="#" title="Increase Font Size" data-command="increaseFontSize" />
                <a id="menuitem-df" className="w-icon-decrease" href="#" title="Decrease Font Size" data-command="decreaseFontSize" />
              </div>
              <a id="menuitem-cc" className="menuitem group" href="#" title="Change Color">
                <span className="w-icon-text-color" />
                <span className="w-icon-caret-down" />
              </a>
              <input type="hidden" id="currentColor" />
              <a id="menuitem-cl" className="menuitem w-icon-text-link" href="#" title="Create Link" />
              <a id="menuitem-lu" className="menuitem w-icon-text-link" style={{display: 'none'}} href="#" title="Update Link" />
              <div id="menuitem-a" className="menuitem">
                <span className="w-icon-text-align-left" /> <span className="w-icon-caret-down" />
                <div className="menusubitems">
                  <a id="menuitem-al" className="menuitem w-icon-text-align-left" href="#" title="Align Left" data-command="justifyLeft" />
                  <a id="menuitem-ac" className="menuitem w-icon-text-align-center" href="#" title="Align Center" data-command="justifyCenter" />
                  <a id="menuitem-ar" className="menuitem w-icon-text-align-right" href="#" title="Align Right" data-command="justifyRight" />
                  <a id="menuitem-af" className="menuitem w-icon-text-align-justified" href="#" title="Align Full" data-command="justifyFull" />
                </div>
              </div>
              <a id="menuitem-ul" className="menuitem w-icon-unordered-list" href="#" title="Bulleted List" data-command="insertUnorderedList" />
              <a id="menuitem-ol" className="menuitem w-icon-ordered-list" href="#" title="Numbered List" data-command="insertOrderedList" />
              <a id="menuitem-rf" className="menuitem w-icon-text-remove-format" href="#" title="Remove Formatting" data-command="removeFormat" />
              <a id="menuitem-z" className="menuitem w-icon-undo group" href="#" title="Undo" data-command="undo" />
              <a id="menuitem-r" className="menuitem w-icon-redo group" href="#" title="Redo" data-command="redo" />
            </div>
          </div>
          <div id="_editor-ui-mask" />
          <div id="elementSettingsWrapper" className="ui-framework element-settings-dialog" />
          <div className="_editor-ui__framework ui-framework">
            <div id="section-dialogs" />
          </div>
        </div>
        <div id="scroll_container">
          <div id="icontent_container" className="icontent_container">
            <div id="icontent" className="icontent">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
