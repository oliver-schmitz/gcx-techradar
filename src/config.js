const Moved = Object.freeze({STEADY: 0, IN: 1, OUT: -1})
const Rings = Object.freeze({HOLD: 3, ASSESS: 2, TRIAL: 1, ADOPT: 0})
const Quadrants = Object.freeze({LANGUAGES: 0, INFRASTRUCTURE: 1, DATASTORES: 2, FRAMEWORKS: 3})

const rings = [
    {name: "ADOPT", color: "#93c47d"},
    {name: "TRIAL", color: "#b7e1cd"},
    {name: "ASSESS", color: "#fce8b2"},
    {name: "HOLD", color: "#f4c7c3"}
]

const quadrants = [
    {name: "Languages"},
    {name: "Infrastructure"},
    {name: "Datastores"},
    {name: "Frameworks"}
]

const colors = {
    background: "#fff",
    grid: "#bbb",
    inactive: "#ddd"
}

const entries = [
    {
        label: "Kotlin",
        quadrant: Quadrants.LANGUAGES,
        ring: Rings.ADOPT,
        moved: Moved.STEADY
    }, {
        label: "Spring-Boot",
        quadrant: Quadrants.FRAMEWORKS,
        ring: Rings.ADOPT,
        moved: Moved.STEADY
    }, {
        label: "Spring-Integration",
        quadrant: Quadrants.FRAMEWORKS,
        ring: Rings.HOLD,
        moved: Moved.OUT
    }, {
        label: "Jetbrains Exposed",
        quadrant: Quadrants.FRAMEWORKS,
        ring: Rings.TRIAL,
        moved: Moved.IN
    }, {
        label: "Terraform",
        quadrant: Quadrants.LANGUAGES,
        ring: Rings.ADOPT,
        moved: Moved.STEADY
    }, {
        label: "Postgres",
        quadrant: Quadrants.DATASTORES,
        ring: Rings.ADOPT,
        moved: Moved.STEADY
    }, {
        label: "Kubernetes",
        quadrant: Quadrants.INFRASTRUCTURE,
        ring: Rings.ADOPT,
        moved: Moved.STEADY
    }, {
        label: "Azure",
        quadrant: Quadrants.INFRASTRUCTURE,
        ring: Rings.ADOPT,
        moved: Moved.STEADY
    }, {
        label: "Grafana",
        quadrant: Quadrants.INFRASTRUCTURE,
        ring: Rings.ASSESS,
        moved: Moved.STEADY
    }, {
        label: "Loki",
        quadrant: Quadrants.INFRASTRUCTURE,
        ring: Rings.ASSESS,
        moved: Moved.STEADY
    }, {
        label: "Azure IOT-Hub",
        quadrant: Quadrants.INFRASTRUCTURE,
        ring: Rings.TRIAL,
        moved: Moved.OUT
    }, {
        label: "RabbitMQ",
        quadrant: Quadrants.INFRASTRUCTURE,
        ring: Rings.TRIAL,
        moved: Moved.IN
    }, {
        label: "Sentry",
        quadrant: Quadrants.INFRASTRUCTURE,
        ring: Rings.TRIAL,
        moved: Moved.IN
    }
]