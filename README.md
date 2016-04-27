Resuméla
========

*Separate resumé style from content for faster editing. Crush editing time like Godzilla*

The Problem
-----------
Creating and editing a resumé takes too long. Most of the time  is wasted on styling and moving stuff around so that your resumé can have the desired look. Manually moving stuff around is also an error prone process.

The Solution
------------
Separating resumé style from content for faster editing. The content is stored in json. The style is handled as angularjs templates. By editing the appropriate template, you can change where certain sections are placed and how various items are rendered, e.g., job item, education item, etc.

JSON Schema
-----------
The schema is simple. To understand it, just look at [sample-resume.json](sample-resume.json). You can also use your own schema, just make sure the corresponding item's template render it accordingly.

Style Templates
---------------
All templates are in the [templates](templates) directory. Here is an example for job item.

```html
<div class='item job-item'>
  <h3 class='job-title'>{{job.title}}</h3>
  <h4 class='text-primary company-name'>{{job.company}}</h4>

  <div>
    <span class='date'><i class='fa fa-calendar'></i> {{job.fromDate}} - {{job.toDate}}</span>
    <span class='location'><i class='fa fa-map-marker'></i> {{job.location}}</span>
  </div>

  <div>{{job.companyBrief}}</div>
  <ul class='li-hilights'>
    <li ng-repeat='bulletPoint in job.hilights'>
      <div>{{bulletPoint}}</div>
    </li>
  </ul>

  <div>
    <span class='used-skill' ng-repeat='sk in job.skills'>{{sk}}</span>
  </div>
</div>
```

Installation
------------
This early incarnation of resuméla is meant for developers who are (slightly) familiar with `angularjs`. The simplest way to use it is to

1. Check out this repo
2. Open `index.html` as a local file in your browser.
3. Copy `sample-resume.json` as `your-resume.json`, edit it and use option 1 in the GUI to render.
4. Print your resumé using browser print or generate pdf functions.

Demo
----
[Check out the demo here](http://taivo.github.io/resumela/)
