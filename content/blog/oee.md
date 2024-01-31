---
aliases: 
authors:
  - Jonathan Nye
blog: true
created: 2024-01-31
description: OEE is the most important KPI in manufacturing. Being able to understand and interpret this number is critical to improve your manufacturing process.
images: 
isDraft: false
modified: 2024-01-31
tags:
  - blog
  - manufacturing
title: Introduction to OEE
---
## Introduction

Overall Equipment Effectiveness, usually referred to as OEE, is one of the main metrics in manufacturing for measuring productivity. 

OEE is a subset of the Total Effective Equipment Performance ([[TEEP]]) which is defined as the total amount of units a line could produce if it ran perfectly all the time.

There is a great resource online at [oee.com](https://www.oee.com/) to learn about OEE. I suggest you read it thoroughly.
This post will act as a summary with practical examples to understand OEE.

## Why do we measure OEE?

Measuring OEE allows us to answer a few important questions when running a production line. 

1. Why didn't we hit our production targets?
2. What can we do to increase the productivity of our line?

These two main questions can be broken down further, depending on whether it is an engineer or manager asking the question.

The key outcome, is helping one figure out where to allocate resources to get the biggest increase in productivity.

## OEE Definition

OEE has the following mathematical definition:

$$OEE = \frac{Good\;units \times Target\;Cycle\;Time}{Planned\;Production\;Time}$$

OEE can be defined as the ratio of good units produced to the theoretical number of units that could have been produced in a given amount of working time.
This means that OEE can never exceed 100% and is bound within the range of 0 to 100. In comparison to TEEP, it excludes any losses due to your scheduling and only considers planned production time.

Any reduction, from the ideal 100%, in OEE is caused for a particular reason. These are known as losses, or reasons why we couldn't produce at 100% of our capacity. The common losses are typically:

- Availability loss
- Performance loss
- Quality loss

Graphically, we can visualize everything we have defined with the figure below:

![[OEE.excalidraw]]

## Allocating losses

OEE is often represented as the product of availability, performance, and quality. 

$$  
\begin{align}  
OEE = \frac{Good\;Units \times Target\;Cycle\;Time}{Planned\;Production\;Time} \\
OEE = Availability \times Performance \times Quality 
\end{align}  
$$

Frequently, people confuse the two methods of calculating OEE as two separate definitions. The value of OEE is always the same with both methods.
Specifically, the breakdown is only used to allocate the reasons for an OEE reduction to a specific category so that you know what needs to be changed to improve OEE the most. If you get different values for OEE with the two calculation methods, you have made a mistake and are not considering some unknown losses. 

Availability, performance, and quality are defined as:

$$Availability = \frac{Runtime}{Planned\;Production\;Time}$$

$$Performance=\frac{Target\;Cycle\;Time \times (Good\;Units + Scrap)}{Runtime}$$

$$Quality=\frac{Good\;Units}{Good\;Units + Scrap}$$

Multiplying all of these together, results in the initial OEE formula defined above.

## Line vs equipment OEE and loss breakdown

The OEE losses will be differently measured depending on whether you are measuring it at the equipment or line level.

For the equipment level measurement, the OEE losses allows you to determine how the specific equipment is performing in comparison to its history.
Equipment OEE enables you to understand the root causes for lost output on a specific piece of equipment.

For line level measurement, the OEE allows you to compare how the entire line, department, or factory is doing compared to its history.
Line OEE enables you to determine where the bottlenecks are that prevent you from increasing your output.

## OEE example

Let's work through an example. 

We are going to calculate OEE for something we are all familiar with. Our car and going on a single road trip to our holiday destination 1000 km away.

To start, we define our TEEP for our car. We can define the limit of TEEP of our car as if we drove it 100% of the time at the speed limit with every kilometer driven taking us closer to our destination, with no problems, maintenance or need to stop for a charge. Obviously this is impossible, but theoretically a car is being wasted every time it is not used or drives a kilometre that doesn't need to be driven.

For our road trip, we plan to drive 1000 km in a single day and assume a 100 kmh average speed limit (To keep things simple) so we could drive 2400km a day if we drove 100% of the time.

Therefore, we can define our utilization or TEEP with ideal OEE as: 

$$Utlization = \frac{Planned\;usage}{All\;time} = \frac{1000\;km}{2400\;km}\approx0.42$$

This means, that assuming our car works perfectly all the time on this trip, we will get a utilization of 0.42 for the day.

As a sidenote:

Typically, a car will be used for less than 2 hours a day, and often driven slower than the ideal speed. Car sharing companies effectively hope to make money by increasing this utilization rate of a car. They make more use of each car in a given time (And pass on any losses while the car is being used to the customer).

If we want to calculate the OEE of our trip, we can define this as:

$$OEE = \frac{Good\;km \times Target\;time\;per\;km}{Trip\;length} = \frac{1000 \times 0.6}{780}\approx 0.77$$

Now we want to figure out how we could have reached our destination sooner. We ended up taking an additional 3 hours to reach our destination, as if we could have driven at the speed limit without stopping the entire way.

To do this, we want to determine our losses. Why did we take longer to reach our destination than planned?

### Quality loss of our road trip

In our case, we can specify a good kilometre as a kilometre travelled that brings us closer to our destination.
Extra kilometres needed to get to a charging point, stop off for snacks or do some sightseeing add kilometres to our trip and don't bring us closer to the destination.

Let's say we had to do an extra 50 km. There were a few reasons for this:

- There was a nice tourist attraction on the way that the family desperately wanted to see
- We took a wrong turn, driving in the wrong direction because the kids were playing with the navigation
- We took a slight detour to a get to a closer charging point because we misjudged how far we could travel on a charge

We can therefore define the quality of our trip as:

$$Quality = \frac{Good\;km}{Good\;km+Extra\;km} = \frac{1000}{1000+50}\approx 0.95$$

### Availability loss of our road trip

While driving, we needed to stop to supercharge a few times, change a tyre, eat, balance our fluid levels and spend time enjoying the view.

We needed 1.5 hours to charge and managed to fit our eating and fluid level balancing into this time. Unfortunately, we spent 30 minutes changing a burst tyre, because we forgot to check the tyre pressure before the trip.

As this is a road trip, we spent some time enjoying the view. Should this be allocated to availability or performance? In this case we are calculating the OEE for the car and the car was available to drive. It is you, the operator, that spent some time to enjoy the view. We therefore will allocate it as a performance loss in the next section. The car was starved of its driver.

Taking all of this into account, we can define the availability of the trip as:

$$Availablity = \frac{Driving\;time}{Trip\;length}=\frac{660}{780} \approx 0.85$$

### Performance loss of our trip

As mentioned before, we spent some time enjoying the view, but we also encountered some other issues on the way.

We ended up driving some kilometres where we couldn't drive at the speed limit due to road works. We also hit some stop start traffic. We were blocked.

We will allocate all of these other losses as a loss of performance:

$$Performance = \frac{Target\;time\;per\;km \times Total\;km}{Driving\;time}=\frac{0.6 \times 1050}{660}\approx0.95$$

We can also calculate the performance using the known OEE, availability and quality of our trip.

$$Performance=\frac{OEE}{Availability \times Quality}=\frac{0.77}{0.85\times0.95} \approx 0.95$$

### How could we improve our trip?

Now that we know where our losses are, we can focus on how to improve our trip and reach our destination faster next time. There are some things that we wouldn't change (It is a road trip, after all).

What would you focus on improving first? As a reminder, our OEE is:

$$OEE =A \times P \times Q  \approx 0.77 \approx 0.85 \times 0.95 \times 0.95$$

It is quite clear that the availability is the main reason why our trip took longer. How could we improve this?

Well, it turns out we didn't start our trip with a full charge, so we spent more time charging than we needed. We also didn't do the required maintenance like checking tyre pressure before the trip, so when we hit a pothole, the tyre burst. If we did the required checks before going on our trip, we would have saved 30 minutes because of the tyre change and at least 20 minutes from one less charge. A saving of over 50 minutes.

This would bring our OEE up to:

$$OEE = \frac{Good\;km \times Target\;time\;per\;km}{Trip\;length} = \frac{1000 \times 0.6}{730}\approx 0.82$$

A nice 5% improvement.

Because this is a road trip, we don't really want to spend less time enjoying the view but would rather try to increase our performance some other way.

How could we do this? Well, you might point out that we could improve our performance by driving faster - over the speed limit 😱. This might work for a short time, but the police are waiting for you and end up pulling you over. This creates an unscheduled stop in your trip and the police take 30 minutes to write you your ticket. Costing you both money and time.

Some things like traffic, and road works are unavoidable, but we might be able to leave at a different time or plan better which means we can drive for longer at the speed limit.

Lastly, we could improve our quality. Here we could have saved distance by planning better again. We could make sure we know our route beforehand, and perform checks more often before we drive too far in the wrong direction.

## Conclusion

We have learnt how to use OEE using a practical example and now have an intuitive understanding of what it is trying to represent.

Go ahead and use these concepts to calculate OEE for your process, business or even your cooking process. This can be applied to many industries, and could help numerous businesses improve their efficiencies. 

Feel free to leave any comments, and I look forward to discussions on how you applied OEE to your business.
