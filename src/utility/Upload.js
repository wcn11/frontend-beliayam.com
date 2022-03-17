export const Upload = ({img, ...rest}) => {
   return (
      <div className="upload">
         {img && <img className="preview" height={70} src={img} alt='preview'/>}
         <input type="file" {...rest} />
      </div>
   )
}