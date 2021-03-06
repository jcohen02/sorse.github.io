{%- for time in post.time -%}
{
  title  : "{{ post.title }}{% unless forloop.first %} (continued){% endunless %}",
  {%- if include.onclick == 'tag' %}
  {%- if post.id %}
  url    : "#{{ post.id | split: '/' | last }}",
  {%- endif %}
  {%- else %}
  {%- if post.url %}
  url    : "{{ post.url | relative_url }}",
  {%- endif %}
  {%- endif %}
  allDay : {% if post.all_day %}true{% else %}false{% endif %},
  category : "{{ post.category }}",
  color  : "#474747",
  classNames: ["fc-sorse-event"],
  {% unless time.end %}// {% endunless %}end    : '{{ time.end | date_to_xmlschema }}',
  start  : '{{ time.start | date_to_xmlschema }}'
}{% unless forloop.last %},{% endunless %}
{%- endfor -%}
