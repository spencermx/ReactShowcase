import { NextResponse, NextRequest} from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Welcome to the custom api route",
    status: "success",
  });
}



// 5) MASON / LSP (Language Server Protocol)
//    Core LSP Keybindings (Active on LSP Attach):
//    - gD               -> Go to Declaration
//    - gd               -> Go to Definition
//    - gi               -> Go to Implementation
//    - gr               -> Find References
//    - K                -> Hover documentation
//    - Ctrl + k         -> Signature help (Normal mode; may conflict w/ window nav)
//    - <leader>wa       -> Add workspace folder
//    - <leader>wr       -> Remove workspace folder
//    - <leader>wl       -> List workspace folders
//    - <leader>rn       -> Rename symbol
//    - <leader>ci       -> Code actions
//    - <leader>f        -> Format buffer (async)
//    - [d / ]d          -> Previous / next diagnostic
//    - <leader>D        -> Go to type definition
//    - <leader>q        -> Diagnostic -> location list
//
//    lsp-overloads (Enhanced Signature Help):
//    - Ctrl + j/k       -> Next/previous signature
//    - Ctrl + l/h       -> Next/previous parameter
//    - Alt + x          -> Close signature window
//
