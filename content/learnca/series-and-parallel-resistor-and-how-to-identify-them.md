---
title: " Series and parallel combination of resistors explained with how to identify them"
postdate: October 07, 2021
image: "/images/parallelresistor.jpg"
description: "
Resistors in series are connected head to tail while resistors in parallel are connected head to head and tail to tail which means if they are not connect in this form then they are connected in star or delta"
alt: ""
weight: "4"
author: Mohammad Abdul
categories: ["Circuit analysis"]
categorylink: /categories/circuit-analysis
layout: learnca
draft: false
---

<div class="content-summary">
<h3>Content Summary</h3>
<ul>
<li>
    Resistors in <span class="text-emphasis">series</span> are connected head to tail.
</li>
<li>
    A resistor in series allows the <span class="text-emphasis">same current</span> to flow through
    them but <span class="text-emphasis">different voltage</span> will be
    dropped across them if their resistance value is different.
</li>
<li>
    Resistors in <span class="text-emphasis">parallel</span> are connected head to head and tail to
    tail.</li>
    <li>
        A resistor in parallel have <span class="text-emphasis">same voltage</span> but <span class="text-emphasis">different current</span> will be
        flowing through each resistor depending on their resistance value.
    </li>
</ul>
</div>
<br>
<div class="content">
<h2>Series and parallel connection of resistors</h2>
<p>
In the case whereby your bulb (or L.E.D) requires 3v to work but the only value of voltage at hand
is 9v then, we need a resistor to reduce the current as well as cause a voltage to drop across the
resistor so that the value of voltage at the output leg of the resistor will be 3v exactly or
approximately.
</p>
<img src="/images/voltagetodrop.jpg" alt="">
<p>
The way to find the resistance value of the resistor is by using the formula shown above.
</p>

<p>
Since our input battery is 9v and our desired voltage is 3v, we are to subtract 3v from 9v which
gives us
6v then we divide by the amount of current we want to pass through our bulb (mostly it is 50&#13187)
then R
will be 120&#8486.
</p>
<img src="/images/120ohmsadd.jpg" alt="">

<p>
Now there is a problem still since if we go to the market to buy a resistor with a resistance value
of 120&#8486, there is no possibility of getting it rather we might get a 47&#8486 and 73&#8486
resistor
which means we need to add these resistors up to get a total of 120&#8486.
</p>

<p>
To do that is by joining them together <span class="text-emphasis">tail to head</span> (which we
call <span class="text-emphasis">series connection</span>). As shown below
</p>
<img src="/images/seriesresistoradd.jpg" alt="">
<p>
Which means if resistors are joined together in series then the equivalent or total resistance value
of the
resistors will be the sum of the resistors resistance value. if that sound complex, read it again
because, resistors as we said in previous articles has a resistance value that tells the rate at
which current will be reduced.
</p>
<h2>Resistors in series (allows us to add resistors)</h2>
<p>
A resistor in series allows the same current to flow through them but different voltage will be
dropped across them if their resistance value is different.
</p>
<img src="/images/seriestips.jpg" alt="">
<h2>Resistors in parallel</h2>
<p>
As resistors are added up by joining them in series, the parallel is a little bit different since we
join it <span class="text-emphasis">head to head</span> and <span class="text-emphasis">tail to
    tail</span> which means any resistor that are not in the form
of series or parallel, it is considered to be in star or delta which we would be discussing later
but for now let’s focus on resistors connected in parallel. </p>

<p>
Here’s how resistors are connected in parallel as oppose to series
</p>
<img src="/images/parallelresistor.jpg" alt="">
<p>
Resistors in parallel has two formulas which are shown below. </p>

<img src="/images/parallelformula.jpg" alt="">
<h2>Two (2) resistors in parallel</h2>
<p>
Let’s do an example using two 10&#8486 resistor Ex.1: (R<sub>1</sub> = 10&#8486 and R<sub>2</sub> =
10&#8486)
</p>
<img src="/images/rinpexample.jpg" alt="">
<p>
As you can see there is something fascinating that has just happened which means if we are looking
for
a 5ohms resistor, we can just pick two 10&#8486 resistor and connect them in parallel //.
</p>
<p>
As you can also see, I just show two forward slash which is a shortcut for saying resistors are in
parallel. </p>

<p>
But this technique works if the resistor we have at hand has a resistance value equal to 2
multiplied by the
resistor we desired. Because as in the above example, we have 10&#8486 which is 2 * 5&#8486.
</p>
<p>
Still, R<sub>1</sub> and R<sub>2</sub> can be of different value as we would be seeing an example
shortly but I just want
to show you some tips.
</p>

<p>
What will the equivalent resistance value be if R<sub>1</sub> = 6&#8486 and R<sub>2</sub> = 4&#8486,
try this and see answer below.
</p>

<button class="see-answer">See answer &darr;</button>
<img class="hide-show-image" src="/images/rinpex2.jpg" alt="">

<h2>3 resistors in parallel </h2>
<p>
We use the second formula which looks a little bit boring but there is still a way to cheat (not
really a cheat but a tip) which is, we would still be using the product/sum formula for two
resistors in the case of solving 3 or more resistors instead of using the 1/R<sub>eq or total</sub>
= 1/R<sub>1</sub> + 1/R<sub>2</sub> + 1/R<sub>3</sub> formula.
</p>

<p>
But let’s solve some example using this boring formula first
</p>

<p>
Ex.3 if R<sub>1</sub>=2&#8486, R<sub>2</sub>=2&#8486, and R<sub>3</sub> =2&#8486
</p>
<img src="/images/3rinp.jpg" alt="">
<p>Now let’s use our product/sum formula but remember, it works for two resistors in parallel only
so therefore, we are to split the 3 resistors in parallel into two and one resistors. </p>
<p>If we solve for the two first, we will get an equivalent resistance value and then we are to join it
with the last one we left earlier and apply same formula again.

</p>
<img src="/images/3rinptestwithpoversum.jpg" alt="">
<p>
As you can see for the first two, we got a total resistance value of 1&#8486

after then, we are to join this equivalent resistance value that we just got with the other 2&#8486
we left before so we are going to have a new total resistance value of 2/3&#8486.

</p>
<blockquote class="blockquote">
<p class="little-nugget">tip</p>
<p class="quote-text">
    A resistor in parallel have same voltage but different current will be
    flowing through each resistor depending on their resistance value.
    </p>

</blockquote>
<p>Here are more examples you can try both on resistors in series and in parallel. Before moving to star
and delta transformation.</p>

<img src="/images/extopractice.jpg" alt="">
