import CustomButton from '@/components/CustomButton'
import CustomModal from '@/components/CustomModal'
import { BarcodeScanningResult, CameraView, useCameraPermissions } from 'expo-camera'
import { useState } from 'react'

interface QrCodeScannerProps {
  onSuccess: (result: BarcodeScanningResult) => void
}

const QrCodeScanner = ({ onSuccess }: QrCodeScannerProps) => {
  const [scannerOpenState, setScannerOpenState] = useState(false)
  const [permission, requestPermission] = useCameraPermissions()

  const openBarCodeScanner = async () => {
    if (!permission || !permission.granted) await requestPermission()
    if (permission?.granted) setScannerOpenState(true)
  }

  const handleBarCodeScanned = (result: BarcodeScanningResult) => {
    setScannerOpenState(false)
    onSuccess(result)
  }

  return (
    <>
      <CustomButton label={'Open bar code scanner'} className="mt-3" onPress={openBarCodeScanner} />
      <CustomModal visible={scannerOpenState} wrapperStyle="h-1/2" onRequestClose={() => setScannerOpenState(false)}>
        {permission?.granted ? (
          <CameraView
            className="h-full w-full"
            facing="back"
            barcodeScannerSettings={{
              barcodeTypes: ['qr']
            }}
            onBarcodeScanned={handleBarCodeScanned}
          />
        ) : null}
      </CustomModal>
    </>
  )
}

export default QrCodeScanner
