export interface Country {
  name: string;
  code: string;
  phone_code: string;
}

export const countries: Country[] = [
  { name: "Afghanistan", code: "AF", phone_code: "+93" },
  { name: "Albania", code: "AL", phone_code: "+355" },
  { name: "Algeria", code: "DZ", phone_code: "+213" },
  { name: "Andorra", code: "AD", phone_code: "+376" },
  { name: "Angola", code: "AO", phone_code: "+244" },
  { name: "Argentina", code: "AR", phone_code: "+54" },
  { name: "Armenia", code: "AM", phone_code: "+374" },
  { name: "Australia", code: "AU", phone_code: "+61" },
  { name: "Austria", code: "AT", phone_code: "+43" },
  { name: "Azerbaijan", code: "AZ", phone_code: "+994" },
  { name: "Bahamas", code: "BS", phone_code: "+1-242" },
  { name: "Bahrain", code: "BH", phone_code: "+973" },
  { name: "Bangladesh", code: "BD", phone_code: "+880" },
  { name: "Barbados", code: "BB", phone_code: "+1-246" },
  { name: "Belarus", code: "BY", phone_code: "+375" },
  { name: "Belgium", code: "BE", phone_code: "+32" },
  { name: "Belize", code: "BZ", phone_code: "+501" },
  { name: "Benin", code: "BJ", phone_code: "+229" },
  { name: "Bhutan", code: "BT", phone_code: "+975" },
  { name: "Bolivia", code: "BO", phone_code: "+591" },
  { name: "Bosnia and Herzegovina", code: "BA", phone_code: "+387" },
  { name: "Botswana", code: "BW", phone_code: "+267" },
  { name: "Brazil", code: "BR", phone_code: "+55" },
  { name: "Brunei", code: "BN", phone_code: "+673" },
  { name: "Bulgaria", code: "BG", phone_code: "+359" },
  { name: "Burkina Faso", code: "BF", phone_code: "+226" },
  { name: "Burundi", code: "BI", phone_code: "+257" },
  { name: "Cambodia", code: "KH", phone_code: "+855" },
  { name: "Cameroon", code: "CM", phone_code: "+237" },
  { name: "Canada", code: "CA", phone_code: "+1" },
  { name: "Central African Republic", code: "CF", phone_code: "+236" },
  { name: "Chad", code: "TD", phone_code: "+235" },
  { name: "Chile", code: "CL", phone_code: "+56" },
  { name: "China", code: "CN", phone_code: "+86" },
  { name: "Colombia", code: "CO", phone_code: "+57" },
  { name: "Comoros", code: "KM", phone_code: "+269" },
  { name: "Congo (Brazzaville)", code: "CG", phone_code: "+242" },
  { name: "Congo (Kinshasa)", code: "CD", phone_code: "+243" },
  { name: "Costa Rica", code: "CR", phone_code: "+506" },
  { name: "Croatia", code: "HR", phone_code: "+385" },
  { name: "Cuba", code: "CU", phone_code: "+53" },
  { name: "Cyprus", code: "CY", phone_code: "+357" },
  { name: "Czech Republic", code: "CZ", phone_code: "+420" },
  { name: "Denmark", code: "DK", phone_code: "+45" },
  { name: "Djibouti", code: "DJ", phone_code: "+253" },
  { name: "Dominica", code: "DM", phone_code: "+1-767" },
  {
    name: "Dominican Republic",
    code: "DO",
    phone_code: "+1-809, +1-829, +1-849",
  },
  { name: "East Timor", code: "TL", phone_code: "+670" },
  { name: "Ecuador", code: "EC", phone_code: "+593" },
  { name: "Egypt", code: "EG", phone_code: "+20" },
  { name: "El Salvador", code: "SV", phone_code: "+503" },
  { name: "Equatorial Guinea", code: "GQ", phone_code: "+240" },
  { name: "Eritrea", code: "ER", phone_code: "+291" },
  { name: "Estonia", code: "EE", phone_code: "+372" },
  { name: "Ethiopia", code: "ET", phone_code: "+251" },
  { name: "Fiji", code: "FJ", phone_code: "+679" },
  { name: "Finland", code: "FI", phone_code: "+358" },
  { name: "France", code: "FR", phone_code: "+33" },
  { name: "Gabon", code: "GA", phone_code: "+241" },
  { name: "Gambia", code: "GM", phone_code: "+220" },
  { name: "Georgia", code: "GE", phone_code: "+995" },
  { name: "Germany", code: "DE", phone_code: "+49" },
  { name: "Ghana", code: "GH", phone_code: "+233" },
  { name: "Greece", code: "GR", phone_code: "+30" },
  { name: "Grenada", code: "GD", phone_code: "+1-473" },
  { name: "Guatemala", code: "GT", phone_code: "+502" },
  { name: "Guinea", code: "GN", phone_code: "+224" },
  { name: "Guinea-Bissau", code: "GW", phone_code: "+245" },
  { name: "Guyana", code: "GY", phone_code: "+592" },
  { name: "Haiti", code: "HT", phone_code: "+509" },
  { name: "Honduras", code: "HN", phone_code: "+504" },
  { name: "Hungary", code: "HU", phone_code: "+36" },
  { name: "Iceland", code: "IS", phone_code: "+354" },
  { name: "India", code: "IN", phone_code: "+91" },
  { name: "Indonesia", code: "ID", phone_code: "+62" },
  { name: "Iran", code: "IR", phone_code: "+98" },
  { name: "Iraq", code: "IQ", phone_code: "+964" },
  { name: "Ireland", code: "IE", phone_code: "+353" },
  { name: "Israel", code: "IL", phone_code: "+972" },
  { name: "Italy", code: "IT", phone_code: "+39" },
  { name: "Ivory Coast", code: "CI", phone_code: "+225" },
  { name: "Jamaica", code: "JM", phone_code: "+1-876" },
  { name: "Japan", code: "JP", phone_code: "+81" },
  { name: "Jordan", code: "JO", phone_code: "+962" },
  { name: "Kazakhstan", code: "KZ", phone_code: "+7" },
  { name: "Kenya", code: "KE", phone_code: "+254" },
  { name: "Kiribati", code: "KI", phone_code: "+686" },
  { name: "Kuwait", code: "KW", phone_code: "+965" },
  { name: "Kyrgyzstan", code: "KG", phone_code: "+996" },
  { name: "Laos", code: "LA", phone_code: "+856" },
  { name: "Latvia", code: "LV", phone_code: "+371" },
  { name: "Lebanon", code: "LB", phone_code: "+961" },
  { name: "Lesotho", code: "LS", phone_code: "+266" },
  { name: "Liberia", code: "LR", phone_code: "+231" },
  { name: "Libya", code: "LY", phone_code: "+218" },
  { name: "Liechtenstein", code: "LI", phone_code: "+423" },
  { name: "Lithuania", code: "LT", phone_code: "+370" },
  { name: "Luxembourg", code: "LU", phone_code: "+352" },
  { name: "North Macedonia", code: "MK", phone_code: "+389" },
  { name: "Madagascar", code: "MG", phone_code: "+261" },
  { name: "Malawi", code: "MW", phone_code: "+265" },
  { name: "Malaysia", code: "MY", phone_code: "+60" },
  { name: "Maldives", code: "MV", phone_code: "+960" },
  { name: "Mali", code: "ML", phone_code: "+223" },
  { name: "Malta", code: "MT", phone_code: "+356" },
  { name: "Marshall Islands", code: "MH", phone_code: "+692" },
  { name: "Mauritania", code: "MR", phone_code: "+222" },
  { name: "Mauritius", code: "MU", phone_code: "+230" },
  { name: "Mexico", code: "MX", phone_code: "+52" },
  { name: "Micronesia", code: "FM", phone_code: "+691" },
  { name: "Moldova", code: "MD", phone_code: "+373" },
  { name: "Monaco", code: "MC", phone_code: "+377" },
  { name: "Mongolia", code: "MN", phone_code: "+976" },
  { name: "Montenegro", code: "ME", phone_code: "+382" },
  { name: "Morocco", code: "MA", phone_code: "+212" },
  { name: "Mozambique", code: "MZ", phone_code: "+258" },
  { name: "Myanmar", code: "MM", phone_code: "+95" },
  { name: "Namibia", code: "NA", phone_code: "+264" },
  { name: "Nauru", code: "NR", phone_code: "+674" },
  { name: "Nepal", code: "NP", phone_code: "+977" },
  { name: "Netherlands", code: "NL", phone_code: "+31" },
  { name: "New Zealand", code: "NZ", phone_code: "+64" },
  { name: "Nicaragua", code: "NI", phone_code: "+505" },
  { name: "Niger", code: "NE", phone_code: "+227" },
  { name: "Nigeria", code: "NG", phone_code: "+234" },
  { name: "North Korea", code: "KP", phone_code: "+850" },
  { name: "Norway", code: "NO", phone_code: "+47" },
  { name: "Oman", code: "OM", phone_code: "+968" },
  { name: "Pakistan", code: "PK", phone_code: "+92" },
  { name: "Palau", code: "PW", phone_code: "+680" },
  { name: "Panama", code: "PA", phone_code: "+507" },
  { name: "Papua New Guinea", code: "PG", phone_code: "+675" },
  { name: "Paraguay", code: "PY", phone_code: "+595" },
  { name: "Peru", code: "PE", phone_code: "+51" },
  { name: "Philippines", code: "PH", phone_code: "+63" },
  { name: "Poland", code: "PL", phone_code: "+48" },
  { name: "Portugal", code: "PT", phone_code: "+351" },
  { name: "Qatar", code: "QA", phone_code: "+974" },
  { name: "Romania", code: "RO", phone_code: "+40" },
  { name: "Russia", code: "RU", phone_code: "+7" },
  { name: "Rwanda", code: "RW", phone_code: "+250" },
  { name: "Saint Lucia", code: "LC", phone_code: "+1-758" },
  { name: "Samoa", code: "WS", phone_code: "+685" },
  { name: "San Marino", code: "SM", phone_code: "+378" },
  { name: "Sao Tome and Principe", code: "ST", phone_code: "+239" },
  { name: "Saudi Arabia", code: "SA", phone_code: "+966" },
  { name: "Senegal", code: "SN", phone_code: "+221" },
  { name: "Serbia", code: "RS", phone_code: "+381" },
  { name: "Seychelles", code: "SC", phone_code: "+248" },
  { name: "Sierra Leone", code: "SL", phone_code: "+232" },
  { name: "Singapore", code: "SG", phone_code: "+65" },
  { name: "Slovakia", code: "SK", phone_code: "+421" },
  { name: "Slovenia", code: "SI", phone_code: "+386" },
  { name: "Solomon Islands", code: "SB", phone_code: "+677" },
  { name: "Somalia", code: "SO", phone_code: "+252" },
  { name: "South Africa", code: "ZA", phone_code: "+27" },
  { name: "South Korea", code: "KR", phone_code: "+82" },
  { name: "South Sudan", code: "SS", phone_code: "+211" },
  { name: "Spain", code: "ES", phone_code: "+34" },
  { name: "Sri Lanka", code: "LK", phone_code: "+94" },
  { name: "Sudan", code: "SD", phone_code: "+249" },
  { name: "Suriname", code: "SR", phone_code: "+597" },
  { name: "Sweden", code: "SE", phone_code: "+46" },
  { name: "Switzerland", code: "CH", phone_code: "+41" },
  { name: "Syria", code: "SY", phone_code: "+963" },
  { name: "Taiwan", code: "TW", phone_code: "+886" },
  { name: "Tajikistan", code: "TJ", phone_code: "+992" },
  { name: "Tanzania", code: "TZ", phone_code: "+255" },
  { name: "Thailand", code: "TH", phone_code: "+66" },
  { name: "Togo", code: "TG", phone_code: "+228" },
  { name: "Tonga", code: "TO", phone_code: "+676" },
  { name: "Trinidad and Tobago", code: "TT", phone_code: "+1-868" },
  { name: "Tunisia", code: "TN", phone_code: "+216" },
  { name: "Turkey", code: "TR", phone_code: "+90" },
  { name: "Turkmenistan", code: "TM", phone_code: "+993" },
  { name: "Tuvalu", code: "TV", phone_code: "+688" },
  { name: "Uganda", code: "UG", phone_code: "+256" },
  { name: "Ukraine", code: "UA", phone_code: "+380" },
  { name: "United Arab Emirates", code: "AE", phone_code: "+971" },
  { name: "United Kingdom", code: "GB", phone_code: "+44" },
  { name: "United States", code: "US", phone_code: "+1" },
  { name: "Uruguay", code: "UY", phone_code: "+598" },
  { name: "Uzbekistan", code: "UZ", phone_code: "+998" },
  { name: "Vanuatu", code: "VU", phone_code: "+678" },
  { name: "Vatican City", code: "VA", phone_code: "+379" },
  { name: "Venezuela", code: "VE", phone_code: "+58" },
  { name: "Vietnam", code: "VN", phone_code: "+84" },
  { name: "Yemen", code: "YE", phone_code: "+967" },
  { name: "Zambia", code: "ZM", phone_code: "+260" },
  { name: "Zimbabwe", code: "ZW", phone_code: "+263" },
];
