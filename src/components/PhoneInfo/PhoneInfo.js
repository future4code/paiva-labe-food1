import React from 'react';
import { PhoneInfoContainer, LeftInfoContainer, MobileSignalImage, WifiImage, HourContainer, RightInfoContainer, BluetoothImage, ChargeImage } from './styled';
import charge from '../../assets/PhoneInfoIcons/charge.svg';
import bluetooth from '../../assets/PhoneInfoIcons/bluetooth.svg';
import mobileSignal from '../../assets/PhoneInfoIcons/mobileSignal.svg';
import wifiSignal from '../../assets/PhoneInfoIcons/wifiSignal.svg';

const PhoneInfo = () => {
    return (
        <PhoneInfoContainer>
            <LeftInfoContainer>
                <MobileSignalImage src={mobileSignal} alt={"ícone de sinal do celular"} />
                <p>Sketch</p>
                <WifiImage src={wifiSignal} alt={"ícone de sinal wi-fi"} />
            </LeftInfoContainer>
            <HourContainer>
                <p>9:41 AM</p>
            </HourContainer>
            <RightInfoContainer>
                <BluetoothImage src={bluetooth} alt={"ícone do bluetooth"} />
                <p>90%</p>
                <ChargeImage src={charge} alt={"ícone de bateria do celular"} />
            </RightInfoContainer>
        </PhoneInfoContainer>
    )
}

export default PhoneInfo;