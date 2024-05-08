import { Annotated } from '@home/components/Annotated';
import classNames from 'clsx';

export default function ImageBlock(props) {
  const { elementId, className, url, altText = '' } = props;
  if (!url) {
    return null;
  }

  return (
    <Annotated content={props}>
      <img
        id={elementId || null}
        className={classNames(
          'sb-component',
          'sb-component-block',
          'sb-component-image-block',
          className
        )}
        src={url}
        alt={altText}
      />
    </Annotated>
  );
}
