// Ignoring is required, as I don't know how to fix this.
// If you do try to fix this, count the hours you spent
// doing this, and add it to the counter.
// Number of hours wasted: 1
// @ts-ignore
import ImportedLogo from '../../assets/logo.png?format=webp&width=100';

// JSX is in the global scope
// eslint-disable-next-line no-undef
function Logo (props: JSX.HTMLAttributes<HTMLImageElement>) {
  return (
    // `type` is required because the URL from the imported logo
    // does not have a file extension.
    <img src={ImportedLogo} alt='Arrow Interactive logo' type='image/webp' {...props} />
  );
}

export default Logo;
