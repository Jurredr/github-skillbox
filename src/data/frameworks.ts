import { IconData } from '../interfaces/IconData'

const frameworks: IconData[] = [
    {
        name: ['Vue', 'VueJS'],
        colorFrom: '#AFF8D6',
        colorTo: '#00B86B',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="31.5" height="26.979" viewBox="0 0 31.5 26.979">
        <path id="vue-logo" data-name="vue-logo" d="M25.095,4.521H19.688l-3.937,6.23-3.375-6.23H0L15.75,31.5,31.5,4.521ZM3.916,6.771H7.7L15.75,20.707,23.794,6.771h3.783L15.75,27.035,3.916,6.771Z" transform="translate(0 -4.521)" fill="#fff"/>
        </svg>`,
        width: 31.5,
        height: 26.979,
        xOffset: 0,
    },
    {
        name: ['React', 'ReactJS'],
        colorFrom: '#A9EEFF',
        colorTo: '#00ACD2',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="31.502" viewBox="0 0 36 31.502">
        <path id="react-logo" data-name="react-logo" d="M29.4,12.459q-.57-.19-1.139-.359c.063-.26.12-.52.176-.78.865-4.191.3-7.559-1.624-8.67-1.849-1.062-4.866.042-7.917,2.7-.3.26-.6.534-.879.809-.19-.183-.387-.366-.584-.541-3.2-2.841-6.405-4.036-8.325-2.918C7.27,3.769,6.722,6.94,7.5,10.905c.077.394.162.78.26,1.174-.45.127-.893.267-1.308.415C2.693,13.8,0,15.848,0,17.972c0,2.194,2.869,4.395,6.771,5.73.316.105.633.211.956.3-.105.422-.2.837-.281,1.266-.738,3.9-.162,7,1.68,8.058,1.9,1.1,5.091-.028,8.2-2.749.246-.218.492-.443.738-.682.309.3.633.591.956.872C22.029,33.356,25,34.4,26.838,33.342c1.9-1.1,2.517-4.423,1.716-8.473q-.095-.464-.211-.949c.225-.063.443-.134.661-.2,4.057-1.343,7-3.516,7-5.745,0-2.13-2.77-4.2-6.6-5.512ZM19.891,6.49c2.616-2.278,5.055-3.171,6.166-2.531,1.188.682,1.645,3.438.9,7.059-.049.239-.1.471-.162.7a35.995,35.995,0,0,0-4.732-.745,35.525,35.525,0,0,0-3-3.734c.274-.26.541-.506.823-.752ZM11.756,21.621c.359.612.724,1.223,1.111,1.821A31.839,31.839,0,0,1,9.6,22.915a32.846,32.846,0,0,1,1.146-3.129c.323.619.654,1.23,1.005,1.835Zm-2.13-8.459c1.012-.225,2.088-.408,3.206-.548-.373.584-.738,1.181-1.083,1.786s-.682,1.209-1,1.828c-.443-1.048-.816-2.074-1.125-3.066Zm1.927,4.845c.464-.97.97-1.92,1.5-2.855s1.111-1.842,1.716-2.735c1.055-.077,2.13-.12,3.227-.12s2.18.042,3.227.12q.9,1.329,1.709,2.721t1.526,2.841q-.707,1.455-1.519,2.869c-.534.935-1.1,1.842-1.7,2.742-1.048.077-2.138.112-3.241.112s-2.173-.035-3.206-.1q-.918-1.339-1.73-2.742c-.541-.935-1.041-1.884-1.512-2.855Zm12.7,3.6c.359-.619.7-1.245,1.027-1.877a32.64,32.64,0,0,1,1.188,3.115,30.884,30.884,0,0,1-3.3.563C23.541,22.816,23.9,22.212,24.251,21.607Zm1.013-5.379c-.33-.619-.668-1.238-1.02-1.842s-.7-1.188-1.076-1.772a32.357,32.357,0,0,1,3.227.563,31.117,31.117,0,0,1-1.132,3.052Zm-7.249-7.91A30.876,30.876,0,0,1,20.1,10.835c-1.392-.063-2.791-.063-4.184,0C16.6,9.928,17.311,9.084,18.014,8.318ZM9.858,4.008c1.181-.689,3.8.3,6.567,2.742.176.155.352.323.534.492a35.723,35.723,0,0,0-3.016,3.734,37.064,37.064,0,0,0-4.725.731c-.091-.359-.169-.724-.246-1.09-.661-3.4-.225-5.97.886-6.609ZM8.135,22.542c-.3-.084-.584-.176-.872-.274a14.341,14.341,0,0,1-4.43-2.194,3.155,3.155,0,0,1-1.322-2.1c0-1.287,2.222-2.932,5.428-4.05.4-.141.809-.267,1.216-.387a37.388,37.388,0,0,0,1.723,4.472,38.434,38.434,0,0,0-1.744,4.535Zm8.2,6.891a12.869,12.869,0,0,1-3.966,2.482,3.112,3.112,0,0,1-2.482.091c-1.118-.647-1.582-3.129-.949-6.469.077-.394.162-.788.26-1.174a35.175,35.175,0,0,0,4.774.689,37.106,37.106,0,0,0,3.037,3.755C16.784,29.025,16.559,29.236,16.334,29.433Zm1.723-1.709c-.717-.773-1.434-1.631-2.13-2.552.675.028,1.371.042,2.074.042.724,0,1.434-.014,2.138-.049a30.322,30.322,0,0,1-2.081,2.559Zm9.19,2.109a3.125,3.125,0,0,1-1.16,2.2c-1.118.647-3.5-.2-6.075-2.4-.3-.253-.591-.527-.893-.809a34.783,34.783,0,0,0,2.967-3.769,34.662,34.662,0,0,0,4.8-.738c.07.288.134.577.19.858a12.817,12.817,0,0,1,.176,4.662Zm1.28-7.559c-.2.063-.394.127-.6.183a35.719,35.719,0,0,0-1.793-4.486,35.54,35.54,0,0,0,1.723-4.423c.366.105.717.218,1.055.33,3.277,1.125,5.576,2.8,5.576,4.078,0,1.378-2.454,3.157-5.962,4.317ZM18,21.22A3.22,3.22,0,1,0,14.78,18,3.22,3.22,0,0,0,18,21.22Z" transform="translate(0 -2.251)" fill="#fff"/>
        </svg>
        `,
        width: 36,
        height: 31.502,
        xOffset: 0,
    },
    {
        name: ['Nuxt', 'NuxtJS'],
        colorFrom: '#7EF2C7',
        colorTo: '#00B97E',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="35.996" height="26.73" viewBox="0 0 35.996 26.73">
        <path id="nuxt-logo" data-name="nuxt-logo" d="M29.586,30.408l.035-.067a1.11,1.11,0,0,0,.08-.176l0-.007a1.74,1.74,0,0,0,.081-.91l0,.01a2.693,2.693,0,0,0-.353-.934l.008.012-7.976-14.03-1.218-2.13-1.211,2.13-7.971,14.03a2.775,2.775,0,0,0-.306.906l0,.017a1.886,1.886,0,0,0,.12,1.069l0-.012a1.214,1.214,0,0,0,.075.153l0-.006a1.971,1.971,0,0,0,1.875.9H27.667a2.272,2.272,0,0,0,1.92-.955Zm-9.34-13.974,7.288,12.822H12.96Zm15.373,11.9L25.095,9.8a2.214,2.214,0,0,0-1.773-1.181,1.961,1.961,0,0,0-1.713,1.177l-1.361,2.385,1.211,2.13,1.875-3.318,10.411,18.27h-3.96a1.78,1.78,0,0,1-.087.912l0-.012a1.158,1.158,0,0,1-.085.189l0-.006-.035.067a2.264,2.264,0,0,1-1.908.955h6.194a2.261,2.261,0,0,0,1.908-.955,1.968,1.968,0,0,0-.16-2.073ZM10.956,30.461a1.483,1.483,0,0,1-.068-.138l0-.009a1.842,1.842,0,0,1-.126-1.068l0,.01H2.251L14.9,7.008l4.15,7.3,1.2-2.13L16.63,5.8a2.211,2.211,0,0,0-1.766-1.166,1.965,1.965,0,0,0-1.713,1.181L.345,28.333a2.266,2.266,0,0,0-.112,2.125,1.971,1.971,0,0,0,1.875.9H12.834a1.966,1.966,0,0,1-1.875-.9Z" transform="translate(-0.004 -4.635)" fill="#fff"/>
        </svg>
        `,
        width: 35.996,
        height: 26.73,
        xOffset: 0,
    },
    {
        name: ['Next', 'NextJS'],
        colorFrom: '#9DC7FF',
        colorTo: '#2579E2',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="35.998" height="35.998" viewBox="0 0 35.998 35.998">
        <path id="next-logo" data-name="next-logo" d="M26.719,33.753c-.133.07-.126.1.007.032a.342.342,0,0,0,.105-.07c0-.024,0-.021-.113.039Zm.267-.141c-.063.049-.063.053.014.014a.216.216,0,0,0,.078-.053C27.078,33.544,27.06,33.552,26.986,33.612Zm.176-.106c-.063.049-.063.053.014.014a.216.216,0,0,0,.078-.053C27.253,33.438,27.236,33.445,27.162,33.506Zm.176-.1c-.063.049-.063.053.014.014a.216.216,0,0,0,.078-.053C27.429,33.333,27.411,33.34,27.338,33.4Zm.243-.158c-.123.078-.162.131-.052.07.078-.045.2-.141.183-.144a.7.7,0,0,0-.131.073ZM16.821.009c-.078.008-.324.032-.546.049A18.038,18.038,0,0,0,3.34,7.518,17.814,17.814,0,0,0,.164,15.382,13.8,13.8,0,0,0,0,18a13.81,13.81,0,0,0,.162,2.622A18.074,18.074,0,0,0,12.476,35.169a19.018,19.018,0,0,0,3.8.787,33.055,33.055,0,0,0,3.448,0,18.171,18.171,0,0,0,6.485-1.9c.309-.159.369-.2.327-.236Q25.056,31.87,23.6,29.9l-2.879-3.888L17.119,20.67q-1.8-2.679-3.631-5.334c-.014,0-.029,2.368-.035,5.263-.01,5.07-.014,5.274-.078,5.394a.636.636,0,0,1-.309.32c-.113.057-.212.067-.743.067h-.609l-.162-.1a.663.663,0,0,1-.236-.257l-.073-.159.007-7.055.01-7.057.109-.137a.956.956,0,0,1,.261-.215c.144-.071.2-.078.81-.078.719,0,.837.028,1.024.233q2.19,3.259,4.343,6.542c2.337,3.543,5.53,8.38,7.1,10.756l2.85,4.317.144-.095a18.51,18.51,0,0,0,3.7-3.245,17.91,17.91,0,0,0,4.236-9.2A13.8,13.8,0,0,0,36,18.007a13.81,13.81,0,0,0-.162-2.622A18.074,18.074,0,0,0,23.526.843,18.828,18.828,0,0,0,19.779.058c-.337-.034-2.664-.073-2.955-.045ZM24.189,10.9a.707.707,0,0,1,.355.415c.029.092.035,2.047.029,6.456l-.01,6.327-1.116-1.71-1.119-1.71v-4.6c0-2.973.014-4.644.035-4.725a.726.726,0,0,1,.348-.444c.144-.073.2-.081.75-.081C23.98,10.825,24.072,10.833,24.189,10.9Z" transform="translate(-0.002 -0.004)" fill="#fff"/>
        </svg>
        `,
        width: 35.998,
        height: 35.998,
        xOffset: 0,
    },
    {
        name: ['Django'],
        colorFrom: '#60F3B7',
        colorTo: '#29AA78',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="27.942" height="35.999" viewBox="0 0 27.942 35.999">
        <path id="django-logo" data-name="django-logo" d="M16.719,0H22.6V27.247a38.849,38.849,0,0,1-7.644.8c-7.187,0-10.932-3.249-10.932-9.48,0-6,3.975-9.9,10.13-9.9a9.4,9.4,0,0,1,2.561.306Zm0,13.715a5.841,5.841,0,0,0-1.988-.306c-2.982,0-4.7,1.835-4.7,5.046,0,3.135,1.644,4.854,4.663,4.854a13.581,13.581,0,0,0,2.025-.153V13.713ZM31.971,9.09V22.736c0,4.7-.344,6.957-1.375,8.906C29.64,33.514,28.379,34.7,25.779,36l-5.466-2.6c2.6-1.222,3.861-2.293,4.663-3.938.841-1.681,1.108-3.632,1.108-8.752V9.089h5.886ZM26.085.032h5.886V6.07H26.085Z" transform="translate(-4.029)" fill="#fff"/>
        </svg>
        `,
        width: 27.942,
        height: 35.999,
        xOffset: 0,
    },
    {
        name: ['Flutter'],
        colorFrom: '#AAE1FB',
        colorTo: '#07ADFA',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="29.1" height="35.999" viewBox="0 0 29.1 35.999">
        <path id="flutter-logo" data-name="flutter-logo" d="M21.471,0,3.45,18,9,23.55,32.526.018H21.491Zm.021,16.608-9.707,9.685L21.491,36H32.55l-9.69-9.7,9.69-9.69H21.493Z" transform="translate(-3.45)" fill="#fff"/>
        </svg>
        `,
        width: 29.1,
        height: 35.998,
        xOffset: 0,
    },
    {
        name: ['Electron', 'ElectronJS'],
        colorFrom: '#A9E4F1',
        colorTo: '#469FB1',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="33.29" height="36" viewBox="0 0 33.29 36">
        <path id="electron-logo" data-name="electron-logo" d="M3.978,17.557C2.417,14.836,2.1,12.289,3.21,10.369,4.7,7.8,8.424,6.9,13.139,7.755a.484.484,0,1,1-.173.952c-4.36-.794-7.684.008-8.919,2.147-.91,1.574-.636,3.772.77,6.224a.484.484,0,1,1-.839.481ZM26.41,8.433c2.759.036,4.745.9,5.64,2.445,1.233,2.133.271,5.4-2.583,8.776a.484.484,0,1,0,.737.625c3.088-3.647,4.166-7.316,2.684-9.885-1.092-1.89-3.4-2.887-6.463-2.927a.484.484,0,1,0-.012.967ZM23.622,31.344a.484.484,0,0,0-.665.165c-1.4,2.335-3.127,3.607-4.9,3.607-2.469,0-4.823-2.476-6.315-6.642a.484.484,0,1,0-.911.326c1.613,4.507,4.255,7.283,7.223,7.283,2.165,0,4.169-1.476,5.733-4.074a.484.484,0,0,0-.165-.665Zm11.06-3.9a2.315,2.315,0,0,1-3.662,1.879c-3.691,2.173-10.744,1.067-17.38-2.766A30.257,30.257,0,0,1,6.43,20.867a.484.484,0,1,1,.716-.651,29.273,29.273,0,0,0,6.976,5.5c6.265,3.617,12.859,4.691,16.233,2.866a2.315,2.315,0,1,1,4.327-1.141Zm-28.659,0a2.315,2.315,0,1,1-3.435-2.022C2.237,21.1,6.782,15.3,13.653,11.332a30.145,30.145,0,0,1,8.616-3.414.484.484,0,0,1,.2.944,29.275,29.275,0,0,0-8.337,3.308c-6.471,3.736-10.747,9.122-10.6,12.97.057,0,.113-.009.17-.009a2.316,2.316,0,0,1,2.315,2.315ZM15.741,2.315a2.315,2.315,0,0,1,4.628,0c0,.035,0,.068,0,.1,3.832,1.98,6.5,8.735,6.5,16.543a30.348,30.348,0,0,1-1.284,8.961.484.484,0,1,1-.923-.289,29.39,29.39,0,0,0,1.24-8.672c0-7.352-2.445-13.674-5.784-15.581a2.312,2.312,0,0,1-4.368-1.063ZM17.7,17.321a1.675,1.675,0,1,0,1.991,1.284A1.675,1.675,0,0,0,17.7,17.321Z" transform="translate(-1.392 -0.083)" fill="#fff"/>
        </svg>
        `,
        width: 33.29,
        height: 36,
        xOffset: 0,
    },
    {
        name: ['Bootstrap'],
        colorFrom: '#E1BEFF',
        colorTo: '#892EE5',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
        <path id="bootstrap-logo" data-name="bootstrap-logo" d="M23.488,24.744a3.2,3.2,0,0,1-3.529,3.329h-6.5V21.509h6.5c3.42,0,3.529,2.563,3.529,3.235Zm-4.03-5.877c.054,0,3.089.08,3.089-2.918,0-1.247-.282-2.882-3.089-2.882h-6v5.8ZM36,8.25v24a6.018,6.018,0,0,1-6,6H6a6.018,6.018,0,0,1-6-6v-24a6.018,6.018,0,0,1,6-6H30A6.018,6.018,0,0,1,36,8.25ZM27.165,25.221c0-1.733-.534-4.684-3.942-5.412V19.75a4.6,4.6,0,0,0,3-4.471c0-.562.161-5.206-6.236-5.206H9.783v21c10.3,0,11.24.135,13.146-.459a5.4,5.4,0,0,0,4.236-5.394Z" transform="translate(0 -2.25)" fill="#fff"/>
        </svg>
        `,
        width: 36,
        height: 36,
        xOffset: 0,
    },
]

export default frameworks