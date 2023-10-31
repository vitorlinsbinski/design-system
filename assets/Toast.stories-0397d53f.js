import{j as t}from"./jsx-runtime-c3de6e4e.js";import{a as l,B as g}from"./index-dc3bc938.js";import{r as f}from"./index-65d0a824.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-725317a4.js";const j={title:"Floaters/Toast",component:l,args:{title:"Agendamento realizado",description:"Quarta-feira, 23 de Outubro às 16h",open:!0}},e={args:{}},r={args:{},decorators:[m=>{const[d,o]=f.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>o(u=>!u),children:"Confirm date"}),m({args:{open:d,title:"Agendamento realizado",description:"Quarta-feira, 23 de Outubro às 16h",onOpenChange:o}})]})}]};var a,n,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {}
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var i,p,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {},
  decorators: [Story => {
    const [open, setOpen] = useState(false);
    return <>
          <Button onClick={() => setOpen(state => !state)}>
            Confirm date
          </Button>
          {Story({
        args: {
          open: open,
          title: "Agendamento realizado",
          description: "Quarta-feira, 23 de Outubro às 16h",
          onOpenChange: setOpen
        }
      })}
        </>;
  }]
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const y=["Primary","Demo"];export{r as Demo,e as Primary,y as __namedExportsOrder,j as default};
//# sourceMappingURL=Toast.stories-0397d53f.js.map
