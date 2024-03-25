import * as Handlebars from 'handlebars';
import { MarkdownTheme } from '../../theme';
import { PageEvent } from 'typedoc';

export default function (theme: MarkdownTheme) {
  Handlebars.registerHelper('componentname', function (this: PageEvent<any>,) {
    return this.model.name
  });

  Handlebars.registerHelper('componentmeta', function (this: PageEvent<any>,) {
    return `{${this.model.name}` + 'Stories}'
  });
}
