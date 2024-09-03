import * as React from 'react'
import Svg, { Mask, Path, SvgProps } from 'react-native-svg'
const SvgComponent = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={206} height={220} fill="none" {...props}>
    <Mask id="a" width={206} height={220} x={0} y={0} fill="#000" maskUnits="userSpaceOnUse">
      <Path fill="#fff" d="M0 0h206v220H0z" />
      <Path
        fillRule="evenodd"
        d="M117.5 16.541c-2.2 1.034-4.857 2.843-5.905 4.02-1.089 1.224-3.103 2.142-4.703 2.142-4.407 0-7.656 1.983-9.453 5.77-2.176 4.584-1.348 9.435 2.529 14.834 2.728 3.8 3.032 4.97 3.032 11.686 0 4.373-.621 8.953-1.5 11.056-.825 1.973-1.5 5.178-1.5 7.121 0 2.266-.475 3.532-1.326 3.532-2.149 0-5.674 4.425-5.674 7.124 0 3.603 2.1 5.946 6.049 6.749l3.451.7.5 7.05c.674 9.507 4.345 15.566 12.279 20.267l5.721 3.391v21.514l-6.576 1.145c-14.765 2.571-26.239 8.994-40.328 22.576l-8.819 8.502-5.063-14.759c-8.792-25.628-10.227-30.811-9.07-32.759 1.391-2.343 2.837-8.416 3.334-14 .293-3.3 1.029-7.504 1.636-9.342.74-2.244.771-3.673.095-4.349-1.536-1.535-5.056.021-6.566 2.902-1.799 3.435-2.346 2.222-3.62-8.022-1.217-9.8-1.656-11.334-3.441-12.019-2.685-1.03-3.948 1.124-3.813 6.502l.134 5.329-1.707-6c-1.5-5.275-2.008-6-4.201-6-2.783 0-2.999 1.451-1.637 11l.713 5-2.974-6.25c-3.058-6.428-3.565-6.873-6.047-5.303-1.239.784-1.071 2.18 1.156 9.61l2.606 8.69-3.52-3.624C19.859 98.793 15 97.361 15 99.884c0 .648 2.221 4.392 4.936 8.319 2.715 3.928 5.253 8.459 5.64 10.07 1.216 5.056 3.471 8.794 7.799 12.929l4.186 4 6.806 28.5c3.743 15.675 7.262 29.716 7.82 31.201 1.59 4.232 4.913 5.799 12.297 5.799 6.494 0 6.66-.07 17.785-7.507l11.231-7.508.286 9.508.286 9.507H169l.123-8.75.123-8.75 1.681 8.5 1.723 9h17.694l-.737-7.382c-1.461-16.116-7.015-29.637-15.788-38.433-7.927-7.946-15.032-11.517-29.112-14.627l-2.792-.618.542-11.636c.298-6.4.655-11.693.793-11.762 9.365-4.687 14.726-12.806 14.741-22.323.006-4.146.434-6.413 1.259-6.667.688-.212 2.503-.66 4.034-.996 5.671-1.245 6.117-9.282.686-12.373-2.331-1.327-2.959-2.378-2.964-4.965-.003-1.805-.656-4.838-1.45-6.739-.894-2.138-1.513-7.454-1.624-13.944-.179-10.428-.163-10.508 2.944-14.046 4.223-4.81 4.326-10.534.291-16.089-4.562-6.28-5.115-6.53-10.298-4.666-4.264 1.534-4.971 1.52-11.457-.215-10.179-2.72-17.107-2.935-21.912-.68Zm11.377 29.963c6.447.303 10.869-.13 17.523-1.715 4.895-1.166 9.138-1.882 9.43-1.59 1.018 1.019 1.441 17.504.449 17.504-.534 0-2.432-.73-4.218-1.62-6.52-3.252-14.658-.206-18.561 6.948-2.484 4.552-4.069 4.64-5.873.32-2.887-6.908-11.763-10.29-19.035-7.252-2.11.883-4.027 1.604-4.26 1.604-.233 0-.29-3.039-.128-6.75.293-6.675.33-6.755 3.283-7.09 1.643-.187 4.098-1.148 5.456-2.138 2.277-1.659 2.658-1.675 4.89-.212 1.57 1.029 5.449 1.729 11.044 1.992Zm-19.627 7.419c-1.237.596-2.25 1.74-2.25 2.54 0 1.036.501 1.213 1.75.615.963-.46 4.113-.847 7-.857 3.235-.011 5.25-.453 5.25-1.151 0-2.301-7.783-3.06-11.75-1.148Zm32.426-.361c-3.191 1.258-1.344 2.518 3.824 2.608 2.75.048 5.787.462 6.75.917 1.242.588 1.75.41 1.75-.617 0-2.895-7.73-4.718-12.324-2.908ZM123.688 64.06c7.54 8.227 1.984 20.81-9.19 20.81-2.375 0-5.283-.517-6.462-1.148-3.372-1.804-6.028-7.038-6.032-11.887-.003-3.766.548-4.92 4.005-8.376 3.853-3.855 4.209-3.99 9.188-3.512 4.356.418 5.705 1.072 8.491 4.112Zm32.028.03c8.47 9.242.029 23.352-12.322 20.599-8.809-1.964-12.548-13.084-6.726-20.004 3.445-4.093 5.813-5.052 11.298-4.572 3.582.316 5.115 1.102 7.75 3.977Zm-44.04 7.016c-.296.77.04 2.194.748 3.162 1.759 2.406 4.576 1.153 4.576-2.034 0-2.003-.499-2.531-2.393-2.531-1.316 0-2.635.63-2.931 1.403Zm31.894.275c-.815 2.123 1.761 4.793 3.852 3.99.868-.334 1.578-1.745 1.578-3.137 0-2.003-.499-2.531-2.393-2.531-1.317 0-2.682.754-3.037 1.677Zm-11.133 4.925c2.168 8.64 12.772 13.144 20.927 8.89 1.576-.822 3.106-1.493 3.401-1.493.296 0 .261 4.53-.076 10.066-.721 11.829-2.765 16.493-9.464 21.596-9.587 7.303-23.863 7.303-33.45 0-6.734-5.129-8.51-9.374-8.962-21.412-.211-5.639-.143-10.237.152-10.219.294.017 1.409.693 2.476 1.5 2.879 2.178 11.162 1.877 15.085-.547 2.976-1.84 6.474-7.18 6.474-9.885 0-2.239 2.806-1.01 3.437 1.504ZM102 80.204c.685.825.852 1.507.372 1.514-.479.01-1.547.463-2.372 1.008-1.27.84-1.117 1.288 1 2.93 2.038 1.582 2.262 2.177 1.215 3.228-1.99 1.996-6.627-.984-7.037-4.522-.564-4.859 3.955-7.612 6.822-4.159Zm62.8-.3c1.989 1.988 1.426 6.527-1.023 8.242-1.222.856-2.797 1.558-3.5 1.558-1.788 0-1.601-3.663.223-4.362 2.132-.819 1.856-2.39-.553-3.155-1.639-.52-1.816-.937-.877-2.068 1.437-1.73 4.114-1.831 5.73-.215ZM36.348 94.014c1.389 6.117 2.41 8.687 3.453 8.687 1.233 0 1.392-1.422.95-8.508-.845-13.546 2.267-11.984 3.641 1.825.372 3.748 1.369 8.545 2.215 10.658 1.512 3.779 1.486 3.913-1.535 8.084-1.69 2.333-3.046 5.186-3.013 6.341.056 2.006.112 2.017 1.25.23.655-1.028 2.42-3.728 3.923-6 1.502-2.271 2.74-5.267 2.75-6.657.02-2.785 2.532-6.973 4.182-6.973.591 0 .754.765.374 1.75-.372.963-1.104 5.498-1.627 10.079-.523 4.582-1.617 9.924-2.431 11.873-.814 1.948-1.48 4.434-1.48 5.524 0 1.089 4.5 15.724 10 32.521s10 31.387 10 32.422c0 4.189-9.924 4.783-13.52.809-1.105-1.221-3.812-10.334-7.048-23.73-10.372-42.932-9.506-40.131-13.08-42.34C32.258 128.698 27 120.019 27 116.825c0-.816-2.297-4.806-5.104-8.867-2.806-4.06-4.826-7.66-4.487-7.998.339-.34 2.578 1.489 4.975 4.062 7.113 7.639 8.093 6.373 4.116-5.32-4.402-12.944-2.608-13.672 2.494-1.013 4.807 11.922 7.055 10.671 4.531-2.521-1.836-9.593-1.874-10.749-.337-10.237.653.219 2.075 4.306 3.16 9.085Zm92.59-7.195c-1.478 2.76.949 5.582 3.734 4.344 1.658-.737 1.619-.85-.424-1.207-1.828-.32-2.137-.85-1.641-2.825.751-2.993-.145-3.16-1.669-.313Zm-6.464 16.924c-.879 1.422 4.53 4.358 8.026 4.358 3.32 0 8.5-2.686 8.5-4.407 0-.528-1.873.015-4.162 1.208l-4.162 2.17-3.832-2.099c-2.108-1.155-4.074-1.708-4.37-1.23ZM141 134.78c0 14.401-.216 14.854-7.484 15.673-4.633.522-10.107-1.057-10.722-3.093-.193-.637-.188-6.558.012-13.158l.362-12 8.916-.049 8.916-.05v12.677Z"
        clipRule="evenodd"
      />
    </Mask>
    <Path
      fill="#222"
      fillRule="evenodd"
      d="M117.5 16.541c-2.2 1.034-4.857 2.843-5.905 4.02-1.089 1.224-3.103 2.142-4.703 2.142-4.407 0-7.656 1.983-9.453 5.77-2.176 4.584-1.348 9.435 2.529 14.834 2.728 3.8 3.032 4.97 3.032 11.686 0 4.373-.621 8.953-1.5 11.056-.825 1.973-1.5 5.178-1.5 7.121 0 2.266-.475 3.532-1.326 3.532-2.149 0-5.674 4.425-5.674 7.124 0 3.603 2.1 5.946 6.049 6.749l3.451.7.5 7.05c.674 9.507 4.345 15.566 12.279 20.267l5.721 3.391v21.514l-6.576 1.145c-14.765 2.571-26.239 8.994-40.328 22.576l-8.819 8.502-5.063-14.759c-8.792-25.628-10.227-30.811-9.07-32.759 1.391-2.343 2.837-8.416 3.334-14 .293-3.3 1.029-7.504 1.636-9.342.74-2.244.771-3.673.095-4.349-1.536-1.535-5.056.021-6.566 2.902-1.799 3.435-2.346 2.222-3.62-8.022-1.217-9.8-1.656-11.334-3.441-12.019-2.685-1.03-3.948 1.124-3.813 6.502l.134 5.329-1.707-6c-1.5-5.275-2.008-6-4.201-6-2.783 0-2.999 1.451-1.637 11l.713 5-2.974-6.25c-3.058-6.428-3.565-6.873-6.047-5.303-1.239.784-1.071 2.18 1.156 9.61l2.606 8.69-3.52-3.624C19.859 98.793 15 97.361 15 99.884c0 .648 2.221 4.392 4.936 8.319 2.715 3.928 5.253 8.459 5.64 10.07 1.216 5.056 3.471 8.794 7.799 12.929l4.186 4 6.806 28.5c3.743 15.675 7.262 29.716 7.82 31.201 1.59 4.232 4.913 5.799 12.297 5.799 6.494 0 6.66-.07 17.785-7.507l11.231-7.508.286 9.508.286 9.507H169l.123-8.75.123-8.75 1.681 8.5 1.723 9h17.694l-.737-7.382c-1.461-16.116-7.015-29.637-15.788-38.433-7.927-7.946-15.032-11.517-29.112-14.627l-2.792-.618.542-11.636c.298-6.4.655-11.693.793-11.762 9.365-4.687 14.726-12.806 14.741-22.323.006-4.146.434-6.413 1.259-6.667.688-.212 2.503-.66 4.034-.996 5.671-1.245 6.117-9.282.686-12.373-2.331-1.327-2.959-2.378-2.964-4.965-.003-1.805-.656-4.838-1.45-6.739-.894-2.138-1.513-7.454-1.624-13.944-.179-10.428-.163-10.508 2.944-14.046 4.223-4.81 4.326-10.534.291-16.089-4.562-6.28-5.115-6.53-10.298-4.666-4.264 1.534-4.971 1.52-11.457-.215-10.179-2.72-17.107-2.935-21.912-.68Zm11.377 29.963c6.447.303 10.869-.13 17.523-1.715 4.895-1.166 9.138-1.882 9.43-1.59 1.018 1.019 1.441 17.504.449 17.504-.534 0-2.432-.73-4.218-1.62-6.52-3.252-14.658-.206-18.561 6.948-2.484 4.552-4.069 4.64-5.873.32-2.887-6.908-11.763-10.29-19.035-7.252-2.11.883-4.027 1.604-4.26 1.604-.233 0-.29-3.039-.128-6.75.293-6.675.33-6.755 3.283-7.09 1.643-.187 4.098-1.148 5.456-2.138 2.277-1.659 2.658-1.675 4.89-.212 1.57 1.029 5.449 1.729 11.044 1.992Zm-19.627 7.419c-1.237.596-2.25 1.74-2.25 2.54 0 1.036.501 1.213 1.75.615.963-.46 4.113-.847 7-.857 3.235-.011 5.25-.453 5.25-1.151 0-2.301-7.783-3.06-11.75-1.148Zm32.426-.361c-3.191 1.258-1.344 2.518 3.824 2.608 2.75.048 5.787.462 6.75.917 1.242.588 1.75.41 1.75-.617 0-2.895-7.73-4.718-12.324-2.908ZM123.688 64.06c7.54 8.227 1.984 20.81-9.19 20.81-2.375 0-5.283-.517-6.462-1.148-3.372-1.804-6.028-7.038-6.032-11.887-.003-3.766.548-4.92 4.005-8.376 3.853-3.855 4.209-3.99 9.188-3.512 4.356.418 5.705 1.072 8.491 4.112Zm32.028.03c8.47 9.242.029 23.352-12.322 20.599-8.809-1.964-12.548-13.084-6.726-20.004 3.445-4.093 5.813-5.052 11.298-4.572 3.582.316 5.115 1.102 7.75 3.977Zm-44.04 7.016c-.296.77.04 2.194.748 3.162 1.759 2.406 4.576 1.153 4.576-2.034 0-2.003-.499-2.531-2.393-2.531-1.316 0-2.635.63-2.931 1.403Zm31.894.275c-.815 2.123 1.761 4.793 3.852 3.99.868-.334 1.578-1.745 1.578-3.137 0-2.003-.499-2.531-2.393-2.531-1.317 0-2.682.754-3.037 1.677Zm-11.133 4.925c2.168 8.64 12.772 13.144 20.927 8.89 1.576-.822 3.106-1.493 3.401-1.493.296 0 .261 4.53-.076 10.066-.721 11.829-2.765 16.493-9.464 21.596-9.587 7.303-23.863 7.303-33.45 0-6.734-5.129-8.51-9.374-8.962-21.412-.211-5.639-.143-10.237.152-10.219.294.017 1.409.693 2.476 1.5 2.879 2.178 11.162 1.877 15.085-.547 2.976-1.84 6.474-7.18 6.474-9.885 0-2.239 2.806-1.01 3.437 1.504ZM102 80.204c.685.825.852 1.507.372 1.514-.479.01-1.547.463-2.372 1.008-1.27.84-1.117 1.288 1 2.93 2.038 1.582 2.262 2.177 1.215 3.228-1.99 1.996-6.627-.984-7.037-4.522-.564-4.859 3.955-7.612 6.822-4.159Zm62.8-.3c1.989 1.988 1.426 6.527-1.023 8.242-1.222.856-2.797 1.558-3.5 1.558-1.788 0-1.601-3.663.223-4.362 2.132-.819 1.856-2.39-.553-3.155-1.639-.52-1.816-.937-.877-2.068 1.437-1.73 4.114-1.831 5.73-.215ZM36.348 94.014c1.389 6.117 2.41 8.687 3.453 8.687 1.233 0 1.392-1.422.95-8.508-.845-13.546 2.267-11.984 3.641 1.825.372 3.748 1.369 8.545 2.215 10.658 1.512 3.779 1.486 3.913-1.535 8.084-1.69 2.333-3.046 5.186-3.013 6.341.056 2.006.112 2.017 1.25.23.655-1.028 2.42-3.728 3.923-6 1.502-2.271 2.74-5.267 2.75-6.657.02-2.785 2.532-6.973 4.182-6.973.591 0 .754.765.374 1.75-.372.963-1.104 5.498-1.627 10.079-.523 4.582-1.617 9.924-2.431 11.873-.814 1.948-1.48 4.434-1.48 5.524 0 1.089 4.5 15.724 10 32.521s10 31.387 10 32.422c0 4.189-9.924 4.783-13.52.809-1.105-1.221-3.812-10.334-7.048-23.73-10.372-42.932-9.506-40.131-13.08-42.34C32.258 128.698 27 120.019 27 116.825c0-.816-2.297-4.806-5.104-8.867-2.806-4.06-4.826-7.66-4.487-7.998.339-.34 2.578 1.489 4.975 4.062 7.113 7.639 8.093 6.373 4.116-5.32-4.402-12.944-2.608-13.672 2.494-1.013 4.807 11.922 7.055 10.671 4.531-2.521-1.836-9.593-1.874-10.749-.337-10.237.653.219 2.075 4.306 3.16 9.085Zm92.59-7.195c-1.478 2.76.949 5.582 3.734 4.344 1.658-.737 1.619-.85-.424-1.207-1.828-.32-2.137-.85-1.641-2.825.751-2.993-.145-3.16-1.669-.313Zm-6.464 16.924c-.879 1.422 4.53 4.358 8.026 4.358 3.32 0 8.5-2.686 8.5-4.407 0-.528-1.873.015-4.162 1.208l-4.162 2.17-3.832-2.099c-2.108-1.155-4.074-1.708-4.37-1.23ZM141 134.78c0 14.401-.216 14.854-7.484 15.673-4.633.522-10.107-1.057-10.722-3.093-.193-.637-.188-6.558.012-13.158l.362-12 8.916-.049 8.916-.05v12.677Z"
      clipRule="evenodd"
    />
    <Path
      stroke="#F6F6F6"
      strokeLinejoin="round"
      strokeWidth={30}
      d="M117.5 16.541c-2.2 1.034-4.857 2.843-5.905 4.02-1.089 1.224-3.103 2.142-4.703 2.142-4.407 0-7.656 1.983-9.453 5.77-2.176 4.584-1.348 9.435 2.529 14.834 2.728 3.8 3.032 4.97 3.032 11.686 0 4.373-.621 8.953-1.5 11.056-.825 1.973-1.5 5.178-1.5 7.121 0 2.266-.475 3.532-1.326 3.532-2.149 0-5.674 4.425-5.674 7.124 0 3.603 2.1 5.946 6.049 6.749l3.451.7.5 7.05c.674 9.507 4.345 15.566 12.279 20.267l5.721 3.391v21.514l-6.576 1.145c-14.765 2.571-26.239 8.994-40.328 22.576l-8.819 8.502-5.063-14.759c-8.792-25.628-10.227-30.811-9.07-32.759 1.391-2.343 2.837-8.416 3.334-14 .293-3.3 1.029-7.504 1.636-9.342.74-2.244.771-3.673.095-4.349-1.536-1.535-5.056.021-6.566 2.902-1.799 3.435-2.346 2.222-3.62-8.022-1.217-9.8-1.656-11.334-3.441-12.019-2.685-1.03-3.948 1.124-3.813 6.502l.134 5.329-1.707-6c-1.5-5.275-2.008-6-4.201-6-2.783 0-2.999 1.451-1.637 11l.713 5-2.974-6.25c-3.058-6.428-3.565-6.873-6.047-5.303-1.239.784-1.071 2.18 1.156 9.61l2.606 8.69-3.52-3.624C19.859 98.793 15 97.361 15 99.884c0 .648 2.221 4.392 4.936 8.319 2.715 3.928 5.253 8.459 5.64 10.07 1.216 5.056 3.471 8.794 7.799 12.929l4.186 4 6.806 28.5c3.743 15.675 7.262 29.716 7.82 31.201 1.59 4.232 4.913 5.799 12.297 5.799 6.494 0 6.66-.07 17.785-7.507l11.231-7.508.286 9.508.286 9.507H169l.123-8.75.123-8.75 1.681 8.5 1.723 9h17.694l-.737-7.382c-1.461-16.116-7.015-29.637-15.788-38.433-7.927-7.946-15.032-11.517-29.112-14.627l-2.792-.618.542-11.636c.298-6.4.655-11.693.793-11.762 9.365-4.687 14.726-12.806 14.741-22.323.006-4.146.434-6.413 1.259-6.667.688-.212 2.503-.66 4.034-.996 5.671-1.245 6.117-9.282.686-12.373-2.331-1.327-2.959-2.378-2.964-4.965-.003-1.805-.656-4.838-1.45-6.739-.894-2.138-1.513-7.454-1.624-13.944-.179-10.428-.163-10.508 2.944-14.046 4.223-4.81 4.326-10.534.291-16.089-4.562-6.28-5.115-6.53-10.298-4.666-4.264 1.534-4.971 1.52-11.457-.215-10.179-2.72-17.107-2.935-21.912-.68Zm11.377 29.963c6.447.303 10.869-.13 17.523-1.715 4.895-1.166 9.138-1.882 9.43-1.59 1.018 1.019 1.441 17.504.449 17.504-.534 0-2.432-.73-4.218-1.62-6.52-3.252-14.658-.206-18.561 6.948-2.484 4.552-4.069 4.64-5.873.32-2.887-6.908-11.763-10.29-19.035-7.252-2.11.883-4.027 1.604-4.26 1.604-.233 0-.29-3.039-.128-6.75.293-6.675.33-6.755 3.283-7.09 1.643-.187 4.098-1.148 5.456-2.138 2.277-1.659 2.658-1.675 4.89-.212 1.57 1.029 5.449 1.729 11.044 1.992Zm-19.627 7.419c-1.237.596-2.25 1.74-2.25 2.54 0 1.036.501 1.213 1.75.615.963-.46 4.113-.847 7-.857 3.235-.011 5.25-.453 5.25-1.151 0-2.301-7.783-3.06-11.75-1.148Zm32.426-.361c-3.191 1.258-1.344 2.518 3.824 2.608 2.75.048 5.787.462 6.75.917 1.242.588 1.75.41 1.75-.617 0-2.895-7.73-4.718-12.324-2.908ZM123.688 64.06c7.54 8.227 1.984 20.81-9.19 20.81-2.375 0-5.283-.517-6.462-1.148-3.372-1.804-6.028-7.038-6.032-11.887-.003-3.766.548-4.92 4.005-8.376 3.853-3.855 4.209-3.99 9.188-3.512 4.356.418 5.705 1.072 8.491 4.112Zm32.028.03c8.47 9.242.029 23.352-12.322 20.599-8.809-1.964-12.548-13.084-6.726-20.004 3.445-4.093 5.813-5.052 11.298-4.572 3.582.316 5.115 1.102 7.75 3.977Zm-44.04 7.016c-.296.77.04 2.194.748 3.162 1.759 2.406 4.576 1.153 4.576-2.034 0-2.003-.499-2.531-2.393-2.531-1.316 0-2.635.63-2.931 1.403Zm31.894.275c-.815 2.123 1.761 4.793 3.852 3.99.868-.334 1.578-1.745 1.578-3.137 0-2.003-.499-2.531-2.393-2.531-1.317 0-2.682.754-3.037 1.677Zm-11.133 4.925c2.168 8.64 12.772 13.144 20.927 8.89 1.576-.822 3.106-1.493 3.401-1.493.296 0 .261 4.53-.076 10.066-.721 11.829-2.765 16.493-9.464 21.596-9.587 7.303-23.863 7.303-33.45 0-6.734-5.129-8.51-9.374-8.962-21.412-.211-5.639-.143-10.237.152-10.219.294.017 1.409.693 2.476 1.5 2.879 2.178 11.162 1.877 15.085-.547 2.976-1.84 6.474-7.18 6.474-9.885 0-2.239 2.806-1.01 3.437 1.504ZM102 80.204c.685.825.852 1.507.372 1.514-.479.01-1.547.463-2.372 1.008-1.27.84-1.117 1.288 1 2.93 2.038 1.582 2.262 2.177 1.215 3.228-1.99 1.996-6.627-.984-7.037-4.522-.564-4.859 3.955-7.612 6.822-4.159Zm62.8-.3c1.989 1.988 1.426 6.527-1.023 8.242-1.222.856-2.797 1.558-3.5 1.558-1.788 0-1.601-3.663.223-4.362 2.132-.819 1.856-2.39-.553-3.155-1.639-.52-1.816-.937-.877-2.068 1.437-1.73 4.114-1.831 5.73-.215ZM36.348 94.014c1.389 6.117 2.41 8.687 3.453 8.687 1.233 0 1.392-1.422.95-8.508-.845-13.546 2.267-11.984 3.641 1.825.372 3.748 1.369 8.545 2.215 10.658 1.512 3.779 1.486 3.913-1.535 8.084-1.69 2.333-3.046 5.186-3.013 6.341.056 2.006.112 2.017 1.25.23.655-1.028 2.42-3.728 3.923-6 1.502-2.271 2.74-5.267 2.75-6.657.02-2.785 2.532-6.973 4.182-6.973.591 0 .754.765.374 1.75-.372.963-1.104 5.498-1.627 10.079-.523 4.582-1.617 9.924-2.431 11.873-.814 1.948-1.48 4.434-1.48 5.524 0 1.089 4.5 15.724 10 32.521s10 31.387 10 32.422c0 4.189-9.924 4.783-13.52.809-1.105-1.221-3.812-10.334-7.048-23.73-10.372-42.932-9.506-40.131-13.08-42.34C32.258 128.698 27 120.019 27 116.825c0-.816-2.297-4.806-5.104-8.867-2.806-4.06-4.826-7.66-4.487-7.998.339-.34 2.578 1.489 4.975 4.062 7.113 7.639 8.093 6.373 4.116-5.32-4.402-12.944-2.608-13.672 2.494-1.013 4.807 11.922 7.055 10.671 4.531-2.521-1.836-9.593-1.874-10.749-.337-10.237.653.219 2.075 4.306 3.16 9.085Zm92.59-7.195c-1.478 2.76.949 5.582 3.734 4.344 1.658-.737 1.619-.85-.424-1.207-1.828-.32-2.137-.85-1.641-2.825.751-2.993-.145-3.16-1.669-.313Zm-6.464 16.924c-.879 1.422 4.53 4.358 8.026 4.358 3.32 0 8.5-2.686 8.5-4.407 0-.528-1.873.015-4.162 1.208l-4.162 2.17-3.832-2.099c-2.108-1.155-4.074-1.708-4.37-1.23ZM141 134.78c0 14.401-.216 14.854-7.484 15.673-4.633.522-10.107-1.057-10.722-3.093-.193-.637-.188-6.558.012-13.158l.362-12 8.916-.049 8.916-.05v12.677Z"
      clipRule="evenodd"
      mask="url(#a)"
    />
  </Svg>
)
export default SvgComponent
