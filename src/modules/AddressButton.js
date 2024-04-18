import * as React from 'react';
import metamaskLogo from '../images/metamask-logo.svg';
import chainIcon from '../images/chain-icon.svg';


export default function AddressButton({onPress, address}) {
  const [shortAddress, setShortAddress] = React.useState('')

  React.useEffect(() => {
    if (address) {
      setShortAddress(address.slice(0, 6) + '...' + address.slice(-4))
    }
  }, [address])

  return (
    <button onClick={onPress} className="address-button">
      <img src={metamaskLogo} alt="Metamask logo" />
      <span>{shortAddress}</span>
      <img src={chainIcon} alt="Chain icon" />
    </button>
  );
}
