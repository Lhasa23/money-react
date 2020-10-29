let tagId = parseInt(localStorage.getItem('tagId') || '0')
const createId = () => {
    tagId += 1
    localStorage.setItem('tagId', tagId.toString())
    return tagId
}
export default createId
