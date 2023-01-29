import {
  GlobeAltIcon,
  UserAddIcon,
  UserGroupIcon,
  CreditCardIcon,
  ArchiveIcon,
  DatabaseIcon,
  TruckIcon,
  DeviceMobileIcon,
  UserCircleIcon,
  SunIcon,
  ShoppingCartIcon,
  ClipboardCheckIcon,
  StatusOnlineIcon,
  ReceiptTaxIcon,
  BeakerIcon,
} from "@heroicons/react/outline";

const DirtyIcons = ({ iconvalue }) => (
  <div>
    {iconvalue == "sellq1" ? (
      <UserAddIcon className="h-8 textorange mb-2" />
    ) : (
      ""
    )}
    {iconvalue == "sellq2" ? (
      <GlobeAltIcon className="h-8 textorange mb-2" />
    ) : (
      ""
    )}
    {iconvalue == "sellq3" ? (
      <UserGroupIcon className="h-8 textorange mb-2" />
    ) : (
      ""
    )}
    {iconvalue == "sellq4" ? (
      <CreditCardIcon className="h-8 textorange mb-2" />
    ) : (
      ""
    )}

    {iconvalue == "invq1" ? (
      <ArchiveIcon className="h-8 textorange mb-2" />
    ) : (
      ""
    )}
    {iconvalue == "invq2" ? (
      <DatabaseIcon className="h-8 textorange mb-2" />
    ) : (
      ""
    )}
    {iconvalue == "invq3" ? <TruckIcon className="h-8 textorange mb-2" /> : ""}
    {iconvalue == "invq4" ? (
      <DeviceMobileIcon className="h-8 textorange mb-2" />
    ) : (
      ""
    )}

    {iconvalue == "repq1" ? (
      <UserCircleIcon className="h-8 textorange mb-2" />
    ) : (
      ""
    )}
    {iconvalue == "repq2" ? <SunIcon className="h-8 textorange mb-2" /> : ""}
    {iconvalue == "repq3" ? (
      <ShoppingCartIcon className="h-8 textorange mb-2" />
    ) : (
      ""
    )}
    {iconvalue == "repq4" ? (
      <DeviceMobileIcon className="h-8 textorange mb-2" />
    ) : (
      ""
    )}

    {iconvalue == "olq1" ? (
      <ClipboardCheckIcon className="h-8 textorange mb-2" />
    ) : (
      ""
    )}
    {iconvalue == "olq2" ? (
      <StatusOnlineIcon className="h-8 textorange mb-2" />
    ) : (
      ""
    )}
    {iconvalue == "olq3" ? (
      <ReceiptTaxIcon className="h-8 textorange mb-2" />
    ) : (
      ""
    )}
    {iconvalue == "olq4" ? <BeakerIcon className="h-8 textorange mb-2" /> : ""}
  </div>
);

export default DirtyIcons;
