"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const expandedServices = [
  {
    title: "Rolling Stock Maintenance",
    icon: "hugeicons:wrench-01",
    overview: "Providing preventive and corrective maintenance services that improve fleet reliability and operational performance. Our engineering teams deploy comprehensive maintenance strategies designed to minimize downtime and maximize the lifecycle of your rolling stock.",
    activities: [
      {
        name: "Preventive Maintenance",
        icon: "hugeicons:calendar-03",
        desc: "Scheduled, proactive servicing of critical components to ensure long-term reliability and compliance with strict safety standards."
      },
      {
        name: "Corrective Maintenance",
        icon: "hugeicons:alert-02",
        desc: "Rapid-response fault diagnosis and repairs to address unexpected component failures and return trains to service safely."
      },
      {
        name: "Inspection",
        icon: "hugeicons:search-visual",
        desc: "Rigorous visual and technical assessments of bogies, braking systems, and electrical components against OEM guidelines."
      },
      {
        name: "Troubleshooting",
        icon: "hugeicons:tools",
        desc: "Advanced diagnostic fault-finding for complex mechanical and software-related issues across integrated train systems."
      },
      {
        name: "Component Replacement",
        icon: "hugeicons:settings-04",
        desc: "Safe and precise removal and installation of heavy rolling stock parts, managed by our specialized mechanical teams."
      },
      {
        name: "Fleet Reliability Support",
        icon: "hugeicons:chart-evaluation",
        desc: "Continuous data monitoring and engineering analysis to identify failure trends and implement long-term corrective actions."
      }
    ]
  },
  {
    title: "Rolling Stock Modification",
    icon: "hugeicons:train-02",
    overview: "Supporting rolling stock upgrade and refurbishment programs through mechanical and electrical modifications. We seamlessly integrate new technologies and modern interiors into existing fleets without compromising base structural integrity.",
    activities: [
      {
        name: "Mechanical Modification",
        icon: "hugeicons:settings-02",
        desc: "Structural enhancements, bracket fabrications, and mechanical adaptations to accommodate upgraded train systems."
      },
      {
        name: "Electrical Modification",
        icon: "hugeicons:flash",
        desc: "Rerouting power systems, upgrading traction control cables, and installing modern sensor networks."
      },
      {
        name: "Interior Refurbishment",
        icon: "hugeicons:sofa-02",
        desc: "Complete cabin strip-downs and refits, including seating upgrades, flooring replacements, and grab-pole installations."
      },
      {
        name: "System Upgrades",
        icon: "hugeicons:arrow-up-right-01",
        desc: "Integrating next-generation passenger information systems, CCTV, and advanced signaling controls."
      },
      {
        name: "Installation Works",
        icon: "hugeicons:drill",
        desc: "End-to-end management of large-scale fleet installation programs across multiple depots simultaneously."
      }
    ]
  },
  {
    title: "Testing & Commissioning",
    icon: "hugeicons:check-list",
    overview: "Delivering comprehensive testing and commissioning services for railway systems before operational handover. Our T&C engineers execute rigorous validation protocols to guarantee safety, functionality, and compliance.",
    activities: [
      {
        name: "Static Testing",
        icon: "hugeicons:battery-full",
        desc: "Verifying individual components, wiring integrity, and software configurations while the train is stationary."
      },
      {
        name: "Dynamic Testing",
        icon: "hugeicons:activity-01",
        desc: "Monitoring system performance, braking parameters, and traction under live operating conditions on the test track."
      },
      {
        name: "Functional Testing",
        icon: "hugeicons:task-01",
        desc: "Ensuring all integrated systems operate correctly according to the strict operational design specifications."
      },
      {
        name: "System Integration",
        icon: "hugeicons:cpu",
        desc: "Validating the seamless communication between onboard train controls, trackside signaling, and centralized control."
      },
      {
        name: "Final Verification",
        icon: "hugeicons:stamp-01",
        desc: "Generating comprehensive test reports and compliance documentation required for final client handover."
      }
    ]
  },
  {
    title: "TCMS Services",
    icon: "hugeicons:cpu",
    overview: "Supporting Train Control & Monitoring Systems through diagnostics, verification, and system integration. We provide specialized software engineers to ensure the brain of your rolling stock operates flawlessly.",
    activities: [
      {
        name: "Diagnostics",
        icon: "hugeicons:dashboard-square-01",
        desc: "In-depth analysis of TCMS network health, pinpointing communication bottlenecks and hardware faults."
      },
      {
        name: "Alarm Analysis",
        icon: "hugeicons:notification-02",
        desc: "Reviewing logic algorithms and event logs to validate train alarm triggers and automated safety responses."
      },
      {
        name: "Communication Verification",
        icon: "hugeicons:wifi-01",
        desc: "Testing MVB, Ethernet, and CAN bus networks for robust data transmission between subsystems."
      },
      {
        name: "Functional Testing",
        icon: "hugeicons:play",
        desc: "Simulating operational scenarios to ensure the TCMS correctly commands doors, HVAC, and traction systems."
      },
      {
        name: "System Integration",
        icon: "hugeicons:layers-01",
        desc: "Ensuring seamless compatibility between new hardware installations and legacy TCMS software architectures."
      }
    ]
  },
  {
    title: "Platform Screen Door (PSD)",
    icon: "hugeicons:door-01",
    overview: "Supporting the complete lifecycle of platform screen door systems from installation through maintenance. We supply the expertise needed to keep critical passenger safety barriers operational.",
    activities: [
      {
        name: "Installation",
        icon: "hugeicons:tools",
        desc: "Precision mounting of door headers, glass panels, and mechanical guides within tight station environments."
      },
      {
        name: "Commissioning",
        icon: "hugeicons:settings-04",
        desc: "Calibrating door timings, testing obstacle detection sensors, and verifying signaling interlocks."
      },
      {
        name: "Preventive Maintenance",
        icon: "hugeicons:calendar-03",
        desc: "Routine cleaning of tracks, lubrication of drive belts, and proactive sensor realignments."
      },
      {
        name: "Corrective Maintenance",
        icon: "hugeicons:alert-02",
        desc: "Emergency response and fault rectification for jammed doors or communication failures."
      },
      {
        name: "Lifecycle Support",
        icon: "hugeicons:chart-evaluation",
        desc: "Long-term monitoring of motor degradation and phased component replacement planning."
      }
    ]
  },
  {
    title: "Mechanical Engineering",
    icon: "hugeicons:settings-02",
    overview: "Providing mechanical engineering expertise for rolling stock maintenance, modification, and refurbishment. Our highly trained mechanics are the backbone of physical train operations.",
    activities: [
      {
        name: "Mechanical Assembly",
        icon: "hugeicons:puzzle",
        desc: "Expert assembly of complex bogie frames, suspension systems, and heavy mechanical couplings."
      },
      {
        name: "HVAC",
        icon: "hugeicons:snow",
        desc: "Installation, maintenance, and refrigerant gas handling for high-capacity train air conditioning units."
      },
      {
        name: "Brake Systems",
        icon: "hugeicons:shield-01",
        desc: "Overhaul of pneumatic brake panels, caliper replacements, and strict functional pressure testing."
      },
      {
        name: "Door Systems",
        icon: "hugeicons:door-01",
        desc: "Mechanical alignment and motor replacements for sliding plug passenger doors."
      },
      {
        name: "Gangway Systems",
        icon: "hugeicons:link-01",
        desc: "Inspection and refurbishment of inter-car gangway bellows and articulated mechanical joints."
      }
    ]
  },
  {
    title: "Electrical Engineering",
    icon: "hugeicons:flash",
    overview: "Delivering electrical engineering support across railway systems and rolling stock. We manage high-voltage integration, low-voltage control, and complex wiring harnesses.",
    activities: [
      {
        name: "Electrical Wiring",
        icon: "hugeicons:flash",
        desc: "Precision loom manufacturing, crimping, and routing of complex electrical harnesses throughout the train."
      },
      {
        name: "Cable Installation",
        icon: "hugeicons:link-02",
        desc: "Safe routing of high-voltage traction cables and sensitive data lines underneath the carbody."
      },
      {
        name: "Power Distribution",
        icon: "hugeicons:energy",
        desc: "Installation and testing of auxiliary power supply units, transformers, and main circuit breakers."
      },
      {
        name: "Battery Systems",
        icon: "hugeicons:battery-charging-01",
        desc: "Maintenance and replacement programs for emergency backup batteries and charging circuits."
      },
      {
        name: "Electrical Testing",
        icon: "hugeicons:search-visual",
        desc: "Megger testing, continuity checks, and high-potential insulation resistance verification."
      }
    ]
  },
  {
    title: "DLP Support",
    icon: "hugeicons:shield-01",
    overview: "Providing engineering assistance during the Defect Liability Period with timely rectification and technical documentation. We protect your reputation by ensuring warranty issues are handled swiftly and professionally.",
    activities: [
      {
        name: "Warranty Support",
        icon: "hugeicons:customer-support",
        desc: "Dedicated standby engineering teams ready to address and resolve client-reported issues immediately."
      },
      {
        name: "Defect Rectification",
        icon: "hugeicons:wrench-01",
        desc: "Surgical fault-finding and component replacement to clear snag lists before final contract closure."
      },
      {
        name: "Engineering Reports",
        icon: "hugeicons:clipboard-01",
        desc: "Detailed root-cause analysis documentation outlining the origin of the defect and the corrective measures taken."
      },
      {
        name: "Documentation",
        icon: "hugeicons:folder-01",
        desc: "Updating as-built drawings and maintenance manuals to reflect any post-delivery design modifications."
      }
    ]
  }
];

export function CoreServicesSection() {
  return (
    <>
      {/* Intro Header */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-overline mb-3 block text-blue-600"
          >
            Deep Dive
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-rounded font-semibold text-4xl lg:text-[56px] tracking-tight text-[#161616] leading-[1.1] max-w-3xl mx-auto"
          >
            Core Engineering Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-lg text-[#616161] mt-6 max-w-2xl mx-auto"
          >
            Explore our specialized technical disciplines in unparalleled detail. From complex system testing to heavy mechanical overhauls, we supply the exact expertise your project demands.
          </motion.p>
        </div>
      </section>

      {/* The 8 Massive Sections */}
      {expandedServices.map((service, index) => {
        const isEven = index % 2 === 0;
        return (
          <section 
            key={index} 
            className={`py-32 ${isEven ? "bg-[#FAFAF9]" : "bg-white"} border-t border-[#ECECEC]`}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
              
              {/* Section Header */}
              <div className="max-w-4xl mb-16 lg:mb-24">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-20 h-20 rounded-3xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                    <Icon icon={service.icon} className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="font-rounded font-semibold text-4xl lg:text-5xl text-[#161616] tracking-tight">
                    {service.title}
                  </h3>
                </div>
                <p className="font-sans text-xl leading-relaxed text-[#616161]">
                  {service.overview}
                </p>
              </div>

              {/* Detailed Activity Cards Grid */}
              <div>
                <h4 className="font-sans font-bold text-sm uppercase tracking-widest text-[#8B8B8B] mb-8">
                  Key Activities & Capabilities
                </h4>
                <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
                  {service.activities.map((activity, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: j * 0.1 }}
                      className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1.35rem)] bg-white rounded-2xl p-8 border border-[#ECECEC] shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300 flex flex-col justify-start"
                    >
                      <div className="flex items-center gap-4 mb-5">
                        <div className="w-10 h-10 rounded-xl bg-blue-50/50 flex items-center justify-center text-blue-600 shrink-0">
                          <Icon icon={activity.icon} className="w-5 h-5" />
                        </div>
                        <h5 className="font-sans font-bold text-lg text-[#161616] leading-tight">
                          {activity.name}
                        </h5>
                      </div>
                      <p className="font-sans text-[#616161] leading-relaxed text-sm">
                        {activity.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </section>
        );
      })}
    </>
  );
}
