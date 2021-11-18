<template><!--
 * @Author: xunzhaotech
 * @Email: luyb@xunzhaotech.com
 * @QQ: 1525572900
 * @LastEditors: xunzhaotech
-->
<h1 id="microdesign" tabindex="-1"><a class="header-anchor" href="#microdesign" aria-hidden="true">#</a> MicroDesign</h1>
<h2 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h2>
<p>MicroDesign是一款基于微服务的后端管理系统架构,致力于打造高效、规范、统一的企业级后端管理平台，采用全新的<a href="https://v3.cn.vuejs.org/guide/introduction.html" target="_blank" rel="noopener noreferrer">Vue3.0<OutboundLink/></a>新版API之Composition API搭建，UI采用开源<a href="https://next.antdv.com/docs/vue/introduce-cn/" target="_blank" rel="noopener noreferrer">Ant Design Vue<OutboundLink/></a>框架，致力打造服务企业的微服务架构后端管理框架。</p>
<h2 id="插件" tabindex="-1"><a class="header-anchor" href="#插件" aria-hidden="true">#</a> 插件</h2>
<h3 id="ant-design-vue" tabindex="-1"><a class="header-anchor" href="#ant-design-vue" aria-hidden="true">#</a> <a href="https://github.com/vueComponent/ant-design-vue" target="_blank" rel="noopener noreferrer">ant-design-vue<OutboundLink/></a></h3>
<h4 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h4>
<p>使用 npm 或 yarn或cnpm 安装</p>
<CodeGroup>
<CodeGroupItem title="NPM">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> ant-design-vue@next --save
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="YARN">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">yarn</span> <span class="token function">add</span> ant-design-vue@next
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="CNPM">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># $ npm install cnpm -g --registry=https://registry.npmmirror.com</span>
<span class="token variable">$cnpm</span> <span class="token function">install</span> ant-design-vue@next --save
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></CodeGroupItem>
</CodeGroup>
<h4 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h4>
<p>main引入文件</p>
<CodeGroup>
<CodeGroupItem title="TS">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">import</span> <span class="token string">'ant-design-vue/es/layout/style'</span><span class="token punctuation">;</span>
<span class="token function">import</span> <span class="token punctuation">{</span> Layout <span class="token punctuation">}</span> from <span class="token string">'ant-design-vue'</span><span class="token punctuation">;</span>
<span class="token function">import</span> Antd from <span class="token string">'ant-design-vue'</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="JS">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">import</span> <span class="token string">'ant-design-vue/es/layout/style'</span><span class="token punctuation">;</span>
<span class="token function">import</span> <span class="token punctuation">{</span> Layout <span class="token punctuation">}</span> from <span class="token string">'ant-design-vue'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></CodeGroupItem>
</CodeGroup>
<h2 id="鸣谢" tabindex="-1"><a class="header-anchor" href="#鸣谢" aria-hidden="true">#</a> 鸣谢</h2>
<ul>
<li>
<p>https://github.com/vueComponent/pro-layout</p>
</li>
<li>
<p>提示配置</p>
<hr>
<div class="custom-container tip"><p class="custom-container-title">测试数据</p>
<p>提示内容</p>
</div>
<div class="custom-container warning"><p class="custom-container-title">测试数据</p>
<p>提示内容</p>
</div>
<div class="custom-container danger"><p class="custom-container-title">测试数据</p>
<p>提示内容</p>
</div>
<details class="custom-container details"><summary>测试数据</summary>
<p>提示内容</p>
</details>
<CodeGroup>
  <CodeGroupItem title="YARN">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span>
</code></pre></div>  </CodeGroupItem>
  <CodeGroupItem title="NPM" active>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span>
</code></pre></div>  </CodeGroupItem>
</CodeGroup>
<ul>
<li>VuePress - <Badge type="tip" text="v2" vertical="top" /></li>
<li>VuePress - <Badge type="warning" text="v2" vertical="middle" /></li>
<li>VuePress - <Badge type="danger" text="v2" vertical="bottom" /></li>
</ul>
<h2 id="安装-1" tabindex="-1"><a class="header-anchor" href="#安装-1" aria-hidden="true">#</a> 安装</h2>
<p>使用 npm 或 yarn或cnpm 安装</p>
<CodeGroup>
<CodeGroupItem title="NPM">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> ant-design-vue@next --save
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="YARN">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">yarn</span> <span class="token function">add</span> ant-design-vue@next
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="CNPM">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># $ npm install cnpm -g --registry=https://registry.npmmirror.com</span>
<span class="token variable">$cnpm</span> <span class="token function">install</span> ant-design-vue@next --save
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></CodeGroupItem>
</CodeGroup>
<h2 id="版本" tabindex="-1"><a class="header-anchor" href="#版本" aria-hidden="true">#</a> 版本</h2>
<ul>
<li>稳定版：npm package</li>
</ul>
</li>
</ul>
</template>
