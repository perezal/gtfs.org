---
layout: default
permalink: /merge-view/stops/
---
{% assign best-practices = site.best-practices | where:"slug","stops" %}
{% for item in best-practices %}
  {% assign best-practices = item %}
{% endfor %}

{% assign reference = site.reference | where:"slug","stops" %}
{% for item in reference %}
  {% assign reference = item %}
{% endfor %}


<table>
  <thead>
    <tr>
      <th>Field Name</th>
      <th>Required</th>
      <th>Details</th>
      <th>Recommendation</th>
    </tr>
  </thead>
  <tbody>
    {% for reference_item in reference.test_table_data %}
      {% for best-practices_item in best-practices.table_data %}
      <tr>
        <td>
        {{ reference_item.field_name }}
        </td>
        <td>
        {% if thing.required %}<b>Required</b>
        {% else %}Optional
        {% endif %}
        </td>
        <td>
        {{ thing.details | markdownify }}
        </td>
      </tr>
      {% endfor %}
    {% endfor %}
  </tbody>
</table>

<hr style="border-top: 5px solid black;" />
<div class="col-md-6 col-xs-12">
  {% for item in site.best-practices %}
    {{ item.content }}
  {% endfor %}
</div>
<div class="col-md-6 col-xs-12">
  {% for item in site.reference %}
    {{ item.content }}
  {% endfor %}
</div>
