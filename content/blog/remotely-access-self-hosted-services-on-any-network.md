---
aliases: 
authors:
  - Jonathan Nye
created: 2022-02-02
description: Cloudflare Access provides a reliable way to create a tunnel between your self-hosted service and Cloudflare. It is much easier to set up a self-hosted service with a domain, without worrying about port forwarding or dynamic DNS.
images: 
isDraft: false
modified: 2023-12105-16
tags:
  - how-to
  - cloudflare
title: How to remotely access your self-hosted services on any network
---

I recently wanted to access a service on my local computer remotely.
The problem was that I generally use a VPN, which means there is no straightforward way to set up port forwarding (at least with my provider).

I had successfully set up port forwarding, dynamic DNS and had a domain for the service without the VPN. I just couldn't figure out how to get it to work with the VPN. I had accepted that sometimes I wouldn't be able to access the service remotely.

I use Cloudflare as my DNS, and use their pages service to host this site. After browsing through their numerous services, they offer, I stumbled across _Cloudflare Tunnel._

> Cloudflare Tunnel
> 
> Cloudflare Tunnel exposes applications running on your local web server on any network with an internet connection without manually adding DNS records or configuring a firewall or router.

Bingo! Exactly what was needed.

I followed [Cloudflare Tunnel · Cloudflare Zero Trust docs](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/) and within 30 minutes the service was accessible, with and without the VPN.

Now I have my service accessible at a fixed URL, reliably and without having to mess around with my router and Dynamic DNS.
