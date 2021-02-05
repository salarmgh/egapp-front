const { client, xml } = require("@xmpp/client");
const debug = require("@xmpp/debug");

class XMPPService {
    private xmpp: any;
    private service: string;
    private domain: string;

    constructor(service: string, domain: string) {
        this.service = service;
        this.domain = domain;
    }
    async auth(username: string, password: string) {
        async function authenticate(auth: any, mechanism: any) {
            console.debug("authenticate", mechanism);
            const credentials = {
                username: "salar",
                password: "123",
            };
            console.debug("authenticating");
            try {
                await auth(credentials);
                console.debug("authenticated");
            } catch (err) {
                console.error(err);
                throw err;
            }
        }
        this.xmpp = client({
            service: this.service,
            domain: this.domain,
            credentials: authenticate,
        });
        debug(this.xmpp, true);
        this.registerHandlers();
        this.start();
    }

    registerHandlers() {
        this.xmpp.on("error", (err: any) => {
            console.error(err);
        });
        this.xmpp.on("offline", () => {
            console.log("offline");
        });
        this.xmpp.on("stanza", async (stanza: any) => {
            if (stanza.is("message")) {
                await this.xmpp.send(xml("presence", { type: "unavailable" }));
                await this.xmpp.stop();
            }
        });
        this.xmpp.on("online", async (address: any) => {
            this.xmpp.send(xml("presence"));
            console.log("I'm fucking online!");
        });
    }
    async start() {
        await this.xmpp.start();
    }
    async send() {
        const message = xml(
            "message",
            { type: "chat", to: "mahyar@egapp.im" },
            xml("body", {}, "hello world")
        );
        this.xmpp.send(message);
    }
}

const ChatService = new XMPPService("ws://127.0.0.1:8085/ws", "egapp.im");

export default ChatService;
