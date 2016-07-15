angular.module('resumela').run(['$templateCache', function($templateCache) {$templateCache.put('templates/block.html','<div ng-transclude class=\'block\' ng-class=\'{"single-column": isSingleColumn, "layout-row multi-column":!isSingleColumn}\' ></div>\n');
$templateCache.put('templates/candidate.html','<div layout=\'row\' class=\'candidate-section\'>\n  <div flex=\'75\'>\n    <h1 class=\'no-margin-bottom no-margin-top\'>{{candidate.name}}</h1>\n    <h5 class=\'text-primary no-margin-top\'>{{candidate.brief}}</h5>\n\n    <div layout=\'row\'>\n      <div flex>\n        <span><i class=\'text-primary fa fa-phone\'></i> {{candidate.phone}}</span>\n      </div>\n      <div flex=\'40\'>\n        <span><i class=\'text-primary fa fa-envelope-o\'></i> {{candidate.email}}</span>\n      </div>\n    </div>\n\n    <div layout=\'row\'>\n      <div flex>\n        <span><i class=\'text-primary fa fa-linkedin-square\'></i> {{candidate.linkedin}}</span>\n      </div>\n      <div flex=\'40\'>\n        <span><i class=\'text-primary fa fa-github\'></i> {{candidate.github}}</span>\n      </div>\n    </div>\n  </div>\n\n  <div flex style=\'position:relative;\'>\n    <div class=\'photo-frame\'>\n      <div ng-if=\'!candidate.photo\' class=\'photo-placeholder\'><i class=\'fa fa-user\'></i></div>\n      <img ng-if=\'candidate.photo\' ng-src=\'{{candidate.photo}}\'/>\n    </div>\n  </div>\n</div>\n');
$templateCache.put('templates/column.html','<div ng-transclude class=\'column\' ng-class=\'{"flex-70":isWide, "flex-30": isSlim, "flex-50": isHalf, "flex": isFlex}\'></div>\n');
$templateCache.put('templates/resume.html','<div class=\'resume-layout\'>\n  <block column-layout=\'single\' class=\'resume-header\'>\n    <candidate candidate=\'resume.candidate\'></candidate>\n  </block>\n\n  <!-- column-layout: single, wide-slim, slim-wide, fifty-fifty -->\n  <block column-layout=\'{{blk.columnLayout}}\' ng-repeat=\'blk in resumeLayout.blocks\'>\n    <column ng-repeat=\'sectionList in blk.columns\'>\n      <section header=\'{{title}}\' items=\'resume.getItems(title)\' ng-repeat=\'title in sectionList\'></section>\n    </column>\n  </block>\n</div>\n');
$templateCache.put('templates/section.html','<table class=\'section\'>\n  <!--\n  Use table because some browsers reprint the header on pagebreak. This is desirable behavior.\n  Note that safari still doesn\'t do this\n  <div class=\'section\'>\n    <h2 class=\'section-header\'>{{header}}</h2>\n    <ng-transclude></ng-transclude>\n  </div>\n  -->\n  <thead>\n    <tr class=\'padding-bottom-1x\'>\n      <th class=\'section-header\'>{{header}}</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td><item item=\'item\' item-type=\'header\' ng-repeat=\'item in items\'></item></td>\n    </tr>\n  </tbody>\n</table>\n');
$templateCache.put('templates/toolPanel.html','<div class=\'tool-panel\'>\n  <div class=\'border-bottom-light\' style=\'padding: 2em 0.5em;border-width:3px;\'>\n    <md-button ng-click=\'loadSampleResume()\' class=\'md-primary\'>* Reset demo *</md-button>\n    <div class=\'padding-horiz-2x text-note\'>\n        <p>\n            This is a barebone demo only. To fully use resumela, clone <a href=\'https://github.com/taivo/resumela\'>the repo</a>,\n            then place a json resume file in the "user-data" subdirectory and load it. To customize, just edit the\n            various templates and directives.\n        </p>\n        <p>\n            Usage requirement: familiarity with AngularJS, not meant for mobile.\n        </p>\n    </div>\n  </div>\n\n  <md-tabs md-dynamic-height md-selected=\'selectedTab\'>\n    <md-tab label=\'Layout\'>\n      <md-content class=\'padding-2x\'>\n          <p>\n              Click a button to change resume layout\n          </p>\n          <ul style=\'list-style-type:none;\'>\n              <li ng-repeat=\'(k,v) in activeResume.versions\'>\n                  <md-button class=\'md-primary border-light\' ng-click=\'switchVersion(k)\'>{{k}}</md-button>\n              </li>\n          </ul>\n      </md-content>\n    </md-tab>\n    <md-tab label=\'Content\'>\n      <md-content class=\'padding-2x\'>\n        <div class=\'padding-top-3x\'>\n          <md-input-container class=\'md-block\'>\n            <label>Local resume file, relative to index.html</label>\n            <input ng-model="$storage.localRes">\n            <div ng-show=\'$errors.localRes\' class=\'error\'>\n              Unable to load file "{{$storage.localRes}}". Make sure it\'s in the same path as index.html and does not contain invalid json.\n            </div>\n            <div class=\'align-right\'>\n              <md-button ng-click=\'loadLocalResume()\' class=\'md-primary\' style=\'border:1px solid #aaa;\'>Load Resume</md-button>\n            </div>\n          </md-input-container>\n\n          <json-display object=\'activeResume\'></json-display>\n\n        </div>\n\n      </md-content>\n    </md-tab>\n    <md-tab label=\'Help\'>\n      <md-content class=\'padding-2x\'>\n        <ul class=\'text-big text-note\'>\n          <li class=\'padding-vert-1x\'>R&eacute;sum&eacute;la is intended to cut down resume editing time for users familiar with angularjs</li>\n          <li class=\'padding-vert-1x\'>To play with the included sample resume, use this web demo as is</li>\n          <li class=\'padding-vert-1x\'>\n            To edit your own resume, clone <a href=\'https://github.com/taivo/resumela\'>https://github.com/taivo/resumela.git</a>\n            and open "index.html" as a local file. Then use the "Content" tab\n          </li>\n          <li class=\'padding-vert-1x\'>\n            Use the included \'sample-resume.json\' to figure out the schema. It\'s simple and it allows easy experimentation with resume layout.\n          </li>\n          <li class=\'padding-vert-1x\'>\n            Modify any of the included templates or css classes to render/style your resume differently\n          </li>\n          <li class=\'padding-vert-1x\'>\n            Use your browser\'s print feature to print the resume or export to PDF. CSS rules are already set to hide all non-resume GUI elements.\n          </li>\n        </ul>\n      </md-content>\n    </md-tab>\n  </md-tabs>\n</div>\n');
$templateCache.put('templates/items/achievement.html','<div class=\'item achievement-item\'>\n  {{item.brief}}\n</div>\n');
$templateCache.put('templates/items/education.html','<div class=\'item education-item\'>\n  <div class=\'degree\'>{{item.name}}</div>\n  <div class=\'text-primary school\'>{{item.school}}, {{item.endDate}}</div>\n</div>\n');
$templateCache.put('templates/items/item.html','<div class=\'item\'></div>\n');
$templateCache.put('templates/items/job.html','<div class=\'item job-item\'>\n  <div class=\'job-title\'>{{item.title}}</div>\n\n  <div class=\'text-primary company-name\'>{{item.company}}</div>\n\n  <div>\n    <span class=\'date\'>\n        <i class=\'fa fa-calendar\'></i>\n        {{item.startDateStr}} - {{item.endDateStr}} - {{item.durationStr}}\n    </span>\n    <span class=\'location\' ng-if=\'item.location\'>\n        <i class=\'fa fa-map-marker\'></i>\n        {{item.location}}\n    </span>\n  </div>\n\n  <div class=\'note\'>{{item.companyBrief}}</div>\n\n  <ul class=\'li-hilights\'>\n    <li ng-repeat=\'bulletPoint in item.hilights\'>\n      <div>{{bulletPoint}}</div>\n    </li>\n    <li>Skills: <span class=\'text-bold comma-list\' ng-repeat=\'sk in item.skills\'>{{sk}}</span></li>\n  </ul>\n</div>\n');
$templateCache.put('templates/items/project.html','<div class=\'item project-item\'>\n  <h4 class=\'text-primary no-margin-bottom\'>{{item.name}}</h4>\n  <div class=\'text-small\'>{{item.url}}</div>\n  <ul class=\'li-hilights\'>\n    <li ng-repeat=\'bulletPoint in item.hilights\'>{{bulletPoint}}</li>\n  </ul>\n</div>\n');
$templateCache.put('templates/items/publication.html','<div class=\'item publication-item\'>\n  <em>&quot;{{item.title}}&quot;</em> - {{item.authors}}\n</div>\n');
$templateCache.put('templates/items/skill.html','<div class=\'item skill-item\'>\n  <label class=\'text-primary text-bold\'>{{item.name}}</label>\n  <input type="range" readonly="readonly" value="{{item.score}}" />\n</div>\n');}]);