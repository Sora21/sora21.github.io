var footerCopyright = `
<div class="copyright text-center">
    <p>Copyright &copy; <em><strong>Sora21</strong></em> <script>document.write(new Date().getFullYear())</script></br>
    <small><a href="http://getbootstrap.com" target="_blank">Bootstrap</a> and the <a href="http://startbootstrap.com/template-overviews/clean-blog/" target="_blank">Clean Blog</a>
    theme both use the <a href="https://github.com/Sora21/sora21.github.io/blob/master/LICENSE"
    target="_blank">MIT</a> license, as do I </small></p>
  </div>
</div>
`;

var footerFull = `
<div class="container">
    <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
            <ul class="list-inline text-center">
                <li class="list-inline-item">
                    <a href="mailto: sora90021@gmail.com">
                        <span class="fa-stack fa-lg">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i class="fa fa-envelope fa-stack-1x fa-inverse"></i>
                        </span>
                    </a>
                </li>
                <li class="list-inline-item">
                    <a href="https://github.com/Sora21" target="_blank">
                        <span class="fa-stack fa-lg">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                        </span>
                    </a>
                </li>
                <li class="list-inline-item">
                    <a href="https://open.spotify.com/user/sora90021/playlist/59JhdQxK3FldJ89sCuZJ0X" target="_blank">
                        <span class="fa-stack fa-lg">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i class="fa fa-spotify fa-stack-1x fa-inverse"></i>
                        </span>
                    </a>
                </li>
                <li class="list-inline-item">
                    <a href="https://www.instagram.com/grezzo21/" target="_blank">
                        <span class="fa-stack fa-lg">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i class="fa fa-instagram fa-stack-1x fa-inverse"></i>
                        </span>
                    </a>
                </li>
            </ul>`
            + footerCopyright+
        `</div>
    </div>
</div>
`

document.write(footerFull);