let sidebarItem = document.querySelectorAll('.react-sanfona-item.sidebar__item')[0],
    sidebarLinks = sidebarItem.querySelectorAll('.sidebar__item-link ');

document.body.insertAdjacentHTML('afterbegin',`
<style>
.sidebar__item-link--active {
    font-weight: 700;
}
</style>`)
//chenge name link in sidebar
sidebarLinks[0].innerHTML = `Sign a Document`;
sidebarLinks[1].innerHTML = `Sign & Send for Signature`;
sidebarLinks[2].innerHTML = `Send for Signature`;
sidebarLinks[3].innerHTML = `Bulk Send`;
