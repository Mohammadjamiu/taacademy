---
title: "{{ replace .Name "-" " " | title }}"
postdate: {{ dateFormat "Jan 02, 06" .Date }}
image: ""
description: ""
alt: ""
weight: ""
author: {{ .Site.Params.author }}
categorylink: /categories/productivity-and-guides
categories: ["Productivity and guides"]
type: posts
draft: false
---
