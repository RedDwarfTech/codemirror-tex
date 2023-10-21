import {
  Node,
  SourceFile,
  TransformationContext,
  Transformer,
  // eslint-disable-next-line import/no-extraneous-dependencies
} from 'typescript';
import ts from 'typescript';

export const codepointTransformer = (ctx: TransformationContext): Transformer<SourceFile> => {
  const v = (n: Node): Node => {
    if (
      ts.isTaggedTemplateExpression(n) &&
      n.tag.getText() === 'cp' &&
      ts.isNoSubstitutionTemplateLiteral(n.template)
    ) {
      return ts.factory.createNumericLiteral(n.template.text.codePointAt(0) as number);
    }

    return ts.visitEachChild(n, v, ctx);
  };
  return (s) => ts.visitNode(s, v);
};

