angular.module('resumela.templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('toolPanel/_contentEditPane.html','<div class=\'padding-top-3x\'>\n  <md-input-container class=\'md-block\'>\n    <label>Local resume file, relative to index.html</label>\n    <input ng-model="$storage.localRes">\n    <div ng-show=\'$errors.localRes\' class=\'error\'>\n      Unable to load file "{{$storage.localRes}}". Make sure it\'s in the same path as index.html and does not contain invalid json.\n    </div>\n    <div class=\'align-right\'>\n        <md-button ng-click=\'loadSampleResume()\' style=\'margin-right:1em;\'>Reset To Sample Resume</md-button>\n        <md-button ng-click=\'loadLocalResume()\' class=\'md-primary\'>Load Resume</md-button>\n    </div>\n  </md-input-container>\n\n  <json-display object=\'activeResume\'></json-display>\n</div>\n');
$templateCache.put('toolPanel/_helpPane.html','<ul class=\'text-big text-note\'>\n  <li class=\'padding-vert-1x\'>R&eacute;sum&eacute;la is intended to cut down resume editing time for users familiar with angularjs</li>\n  <li class=\'padding-vert-1x\'>To play with the included sample resume, use this web demo as is</li>\n  <li class=\'padding-vert-1x\'>\n    To edit your own resume, clone <a href=\'https://github.com/taivo/resumela\'>https://github.com/taivo/resumela.git</a>\n    and open "index.html" as a local file. Then use the "Content" tab\n  </li>\n  <li class=\'padding-vert-1x\'>\n    Use the included \'sample-resume.json\' to figure out the schema. It\'s simple and it allows easy experimentation with resume layout.\n  </li>\n  <li class=\'padding-vert-1x\'>\n    Modify any of the included templates or css classes to render/style your resume differently\n  </li>\n  <li class=\'padding-vert-1x\'>\n    Use your browser\'s print feature to print the resume or export to PDF. CSS rules are already set to hide all non-resume GUI elements.\n  </li>\n</ul>\n');
$templateCache.put('toolPanel/_layoutDemoPane.html','<div>\n    <h5>Select a demo layout</h5>\n\n    <md-radio-group ng-model=\'activeResume._activeVersion\'>\n        <md-radio-button ng-repeat="(k,v) in activeResume.versions" ng-value="k" aria-label="{{ k }}">\n            {{ k }}\n        </md-radio-button>\n    </md-radio-group>\n\n\n    <h5 style=\'margin-bottom:0;\'>Reset Demo</h5>\n    <md-button class=\'md-primary\' ng-click=\'loadSampleResume()\'>Reset To Sample Resume</md-button>\n</div>\n');
$templateCache.put('toolPanel/templateEditPane.html','<div>\n    <md-input-container style=\'margin-bottom:0;\'>\n        <label>Select</label>\n        <md-select ng-model="selectedTemplate">\n            <md-option ng-repeat="template in editableTemplates" ng-value="template">{{template.name}}</md-option>\n        </md-select>\n    </md-input-container>\n\n    <template-editor template-id=\'{{selectedTemplate.templateId}}\' template-model=\'templateModel\'></template-editor>\n</div>\n');
$templateCache.put('toolPanel/toolPanel.html','<div class=\'tool-panel\'>\n  <!--div class=\'border-bottom-light\' style=\'padding: 2em 0.5em;border-width:3px;\'>\n    <md-button ng-click=\'loadSampleResume()\' class=\'md-primary\'>* Reset demo *</md-button>\n    <div class=\'padding-horiz-2x text-note\'>\n        <p>\n            This is a barebone demo only. To fully use resumela, clone <a href=\'https://github.com/taivo/resumela\'>the repo</a>,\n            then place a json resume file in the "user-data" subdirectory and load it. To customize, just edit the\n            various templates and directives.\n        </p>\n        <p>\n            Usage requirement: familiarity with AngularJS, not meant for mobile.\n        </p>\n    </div>\n</div-->\n\n  <md-tabs md-dynamic-height md-selected=\'selectedTab\'>\n    <md-tab label=\'Layout\'>\n      <md-content class=\'padding-2x\' ng-include="\'toolPanel/_layoutDemoPane.html\'"></md-content>\n    </md-tab>\n    <md-tab label=\'Templates\'>\n        <md-content class=\'padding-2x\'>\n            <template-edit-pane></template-edit-pane>\n        </md-content>\n    </md-tab>\n    <md-tab label=\'Content\'>\n      <md-content class=\'padding-2x\' ng-include="\'toolPanel/_contentEditPane.html\'"></md-content>\n    </md-tab>\n    <md-tab label=\'Help\'>\n      <md-content class=\'padding-2x\' ng-include="\'toolPanel/_helpPane.html\'"></md-content>\n    </md-tab>\n  </md-tabs>\n</div>\n');
$templateCache.put('templateEditor/templateEditor.html','<div>\n    <div>\n        <h5 style=\'margin-bottom:0;\'>Data</h5>\n        <json-display object=\'templateModel\' style=\'max-height: 10em;\'></json-display>\n    </div>\n\n    <div>\n        <h5 style=\'margin-bottom:0;\'>Fields</h5>\n        <div>{{modelKeys}}</div>\n    </div>\n\n    <h5 style=\'margin-bottom:0;\'>{{templateId}} Template</h5>\n    <div ui-ace="{mode: \'html\'}" ng-model=\'templateContent\'></div>\n    <div style=\'text-align:right;\'>\n        <md-button ng-click=\'updateTemplate()\' class=\'md-primary\'>Update</md-button>\n    </div>\n</div>\n');
$templateCache.put('item/achievement.html','<div class=\'item achievement-item\'>\n  {{item.brief}}\n</div>\n');
$templateCache.put('item/candidate.html','<div layout=\'row\' class=\'candidate-section\'>\n  <div flex=\'75\'>\n    <h1 class=\'no-margin-bottom no-margin-top\'>{{candidate.name}}</h1>\n    <h5 class=\'text-primary no-margin-top\'>{{candidate.brief}}</h5>\n\n    <div layout=\'row\'>\n      <div flex>\n        <span><i class=\'text-primary fa fa-phone\'></i> {{candidate.phone}}</span>\n      </div>\n      <div flex=\'40\'>\n        <span><i class=\'text-primary fa fa-envelope-o\'></i> {{candidate.email}}</span>\n      </div>\n    </div>\n\n    <div layout=\'row\'>\n      <div flex>\n        <span><i class=\'text-primary fa fa-linkedin-square\'></i> {{candidate.linkedin}}</span>\n      </div>\n      <div flex=\'40\'>\n        <span><i class=\'text-primary fa fa-github\'></i> {{candidate.github}}</span>\n      </div>\n    </div>\n  </div>\n\n  <div flex style=\'position:relative;\'>\n    <div class=\'photo-frame\'>\n      <div ng-if=\'!candidate.photo\' class=\'photo-placeholder\'><i class=\'fa fa-user\'></i></div>\n      <img ng-if=\'candidate.photo\' ng-src=\'{{candidate.photo}}\'/>\n    </div>\n  </div>\n</div>\n');
$templateCache.put('item/education.html','<div class=\'item education-item\'>\n  <div class=\'degree\'>{{item.name}}</div>\n  <div class=\'text-primary school\'>{{item.school}}, {{item.endDate}}</div>\n</div>\n');
$templateCache.put('item/item.html','<div class=\'item\'></div>\n');
$templateCache.put('item/job.html','<div class=\'item job-item\'>\n  <div class=\'job-title\'>{{item.title}}</div>\n\n  <div class=\'text-primary company-name\'>{{item.company}}</div>\n\n  <div>\n    <span class=\'date\'>\n        <i class=\'fa fa-calendar\'></i>\n        {{item.startDateStr}} - {{item.endDateStr}} - {{item.durationStr}}\n    </span>\n    <span class=\'location\' ng-if=\'item.location\'>\n        <i class=\'fa fa-map-marker\'></i>\n        {{item.location}}\n    </span>\n  </div>\n\n  <div class=\'note\'>{{item.companyBrief}}</div>\n\n  <ul class=\'li-hilights\'>\n    <li ng-repeat=\'bulletPoint in item.hilights\'>\n      <div>{{bulletPoint}}</div>\n    </li>\n    <li>\n        Skills:\n        <span class=\'text-bold comma-list\' ng-repeat=\'sk in item.skills\'>\n            {{sk}}\n        </span>\n    </li>\n  </ul>\n</div>\n');
$templateCache.put('item/project.html','<div class=\'item project-item\'>\n  <h4 class=\'text-primary no-margin-bottom\'>{{item.name}}</h4>\n  <div class=\'text-small\'>{{item.url}}</div>\n  <ul class=\'li-hilights\'>\n    <li ng-repeat=\'bulletPoint in item.hilights\'>{{bulletPoint}}</li>\n  </ul>\n</div>\n');
$templateCache.put('item/publication.html','<div class=\'item publication-item\'>\n  <em>&quot;{{item.title}}&quot;</em> - {{item.authors}}\n</div>\n');
$templateCache.put('item/skill.html','<div class=\'item skill-item\'>\n  <label class=\'text-primary text-bold\'>{{item.name}}</label>\n  <input type="range" readonly="readonly" value="{{item.score}}" />\n</div>\n');
$templateCache.put('layout/block.html','<ng-transclude class=\'block\' ng-class=\'{"single-column": isSingleColumn, "layout-row multi-column":!isSingleColumn}\'> </ng-transclude>\n');
$templateCache.put('layout/column.html','<div ng-transclude class=\'column\' ng-class=\'{"flex-70":isWide, "flex-30": isSlim, "flex-50": isHalf, "flex": isFlex}\'></div>\n');
$templateCache.put('layout/resume.html','<div class=\'resume-layout\'>\n  <block column-layout=\'single\' class=\'resume-header\'>\n    <candidate candidate=\'resume.candidate\'></candidate>\n  </block>\n\n  <!-- column-layout: single, wide-slim, slim-wide, fifty-fifty -->\n  <block column-layout=\'{{blk.columnLayout}}\' ng-repeat=\'blk in resumeLayout.blocks\'>\n      <column ng-repeat=\'sectionList in blk.columns\'>\n          <section header=\'{{title}}\' items=\'resume.getItems(title)\' ng-repeat=\'title in sectionList\'></section>\n      </column>\n  </block>\n</div>\n');
$templateCache.put('layout/section.html','<table class=\'section\'>\n  <!--\n  Use table because some browsers reprint the header on pagebreak. This is desirable behavior.\n  Note that safari still doesn\'t do this\n  <div class=\'section\'>\n    <h2 class=\'section-header\'>{{header}}</h2>\n    <ng-transclude></ng-transclude>\n  </div>\n  -->\n  <thead>\n    <tr class=\'padding-bottom-1x\'>\n      <th class=\'section-header\'>{{header}}</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td><item item=\'item\' item-type=\'header\' ng-repeat=\'item in items\'></item></td>\n    </tr>\n  </tbody>\n</table>\n');}]);