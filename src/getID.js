import cssesc from 'cssesc';

/**
 * Returns the Tag of the element
 * @param  { Object } element
 * @return { String }
 */
export function getID( el )
{
  const id = el.getAttribute( 'id' );

  if( id !== null && id !== '')
  {
    return '#' + cssesc(id, {
      'isIdentifier': true
    });
  }
  return null;
}
